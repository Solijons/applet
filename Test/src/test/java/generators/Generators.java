package generators;

import Model.NurseryFieldActivityData;
import com.beust.jcommander.JCommander;
import com.beust.jcommander.Parameter;
import com.beust.jcommander.ParameterException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.thoughtworks.xstream.XStream;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;


public class Generators {
    @Parameter(names = "-c", description = "NFE Form Count")
    public int count;

    @Parameter(names = "-f", description = "Target file")
    public String file;

    @Parameter(names = "-d", description = "Data format")
    public String format;


    public static void main(String[] args) throws IOException {
        Generators generators = new Generators();
        JCommander jCommander = new JCommander(generators);
        try {
            jCommander.parse(args);
        } catch (ParameterException e) {
            jCommander.usage();
            return;
        }
        generators.run();
    }

    private void run() throws IOException {
        List<NurseryFieldActivityData> nurseryFieldActivityData = generateGroups(count);
        if (format.equals("csv")) {
            saveAsCsv(nurseryFieldActivityData, new File(file));
        } else if (format.equals("xml")){
            saveAsXml(nurseryFieldActivityData, new File(file));
        } else if (format.equals("json")){
            saveAsJSON(nurseryFieldActivityData, new File(file));
        }
        else {
            System.out.println("Unrecognized format");
        }

    }

    private void saveAsJSON(List<NurseryFieldActivityData> nyrseryFieldActivityData
            , File file) throws IOException {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String json = gson.toJson(nyrseryFieldActivityData
        );
        try(Writer writer = new FileWriter(file);) {
            writer.write(json);
        }
    }

    private void saveAsXml(List<NurseryFieldActivityData> nyrseryFieldActivityData
            , File file) throws IOException {
        XStream xStream = new XStream();
        xStream.processAnnotations(NurseryFieldActivityData.class);
        String xml = xStream.toXML(nyrseryFieldActivityData
        );
        try(Writer writer = new FileWriter(file);) {
            writer.write(xml);
        }
    }

    private void saveAsCsv(List<NurseryFieldActivityData> nyrseryFieldActivityData
            , File file) throws IOException {
        try(Writer writer = new FileWriter(file);) {
            for (NurseryFieldActivityData nfeFormData: nyrseryFieldActivityData
            ) {
                writer.write(String.format("%s;%s;%s;%s\n", nfeFormData.getDate(), nfeFormData.getComments(), nfeFormData.getStatus(), nfeFormData.getProposedAction()));
            }
        }
    }

    private List<NurseryFieldActivityData> generateGroups(int count) {
        List<NurseryFieldActivityData> nyrseryFieldActivityData
                = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            nyrseryFieldActivityData
                    .add(new NurseryFieldActivityData()
                    .withDate(DateTimeFormatter.ofPattern("MM/dd/yyy").format(LocalDate.now()))
                    .withComments(String.format("This comment is being written by test recorder %s", i))
                    .withStatus("Warn")
                    .withProposedAction(String.format("This proposed action is being written by test recorder %s", i))
            );
        }
        return nyrseryFieldActivityData
                ;
    }
}