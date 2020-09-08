package Model;

public class NurseryFieldData {
    private boolean active;
    private String actualPlantingDate;
    private String farm;
    private String field;
    private String forecastDate;
    private int id;
    private String location;
    private String pottingDate;
    private String priority;
    private String site;
    private double size;
    private String type;
    private String vrcId;

    public NurseryFieldData withActive(boolean active) {
        this.active = active;
        return this;
    }

    public NurseryFieldData withActualPlantingDate(String actualPlantingDate) {
        this.actualPlantingDate = actualPlantingDate;
        return this;
    }

    public NurseryFieldData withFarm(String farm) {
        this.farm = farm;
        return this;
    }

    public NurseryFieldData withField(String field) {
        this.field = field;
        return this;
    }

    public NurseryFieldData withForecastDate(String forecastDate) {
        this.forecastDate = forecastDate;
        return this;
    }

    public NurseryFieldData withId(int id) {
        this.id = id;
        return this;
    }

    public NurseryFieldData withLocation(String location) {
        this.location = location;
        return this;
    }

    public NurseryFieldData withPottingDate(String pottingDate) {
        this.pottingDate = pottingDate;
        return this;
    }

    public NurseryFieldData withPriority(String priority) {
        this.priority = priority;
        return this;
    }

    public NurseryFieldData withSite(String site) {
        this.site = site;
        return this;
    }

    public NurseryFieldData withSize(double size) {
        this.size = size;
        return this;
    }

    public NurseryFieldData withType(String type) {
        this.type = type;
        return this;
    }

    public NurseryFieldData withVrcId(String vrcId) {
        this.vrcId = vrcId;
        return this;
    }


    public boolean isActive() {
        return active;
    }

    public String getActualPlantingDate() {
        return actualPlantingDate;
    }

    public String getFarm() {
        return farm;
    }

    public String getField() {
        return field;
    }

    public String getForecastDate() {
        return forecastDate;
    }

    public int getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public String getPottingDate() {
        return pottingDate;
    }

    public String getPriority() {
        return priority;
    }

    public String getSite() {
        return site;
    }

    public double getSize() {
        return size;
    }

    public String getType() {
        return type;
    }

    public String getVrcId() {
        return vrcId;
    }

}
