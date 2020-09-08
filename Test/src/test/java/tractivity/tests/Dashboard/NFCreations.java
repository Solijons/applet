package tractivity.tests.Dashboard;

import Model.NurseryFieldData;
import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

public class NFCreations extends TestBase {

    @Test(groups = {"NFCreationTests", "createNFTest"})
    public void createNFTest() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().initNurseryFieldCreation();
        }
        app.common().switchToModal();
        app.dashboard().fillOutNurseryFieldForm(
                new NurseryFieldData()
                        .withType("MK")
                        .withLocation("OPEN FIELD")
                        .withPriority("Low")
                        .withPottingDate("10/12/2019")
                        .withForecastDate("10/12/2019")
                        .withSize(32456.00)
                        .withVrcId("5421")
        );
        app.dashboard().submitNFCreation();
        app.common().switchToModal();
        String actual = app.common().getDialogText("nf-creation-prompt-title");
        Assert.assertEquals(actual, "Success");
    }

}
