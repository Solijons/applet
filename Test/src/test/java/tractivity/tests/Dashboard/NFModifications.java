package tractivity.tests.Dashboard;

import Model.NurseryFieldData;
import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

public class NFModifications extends TestBase {
    @Test(groups = {"NFModificationTests", "modifyNFNurseryType"})
    public void modifyNFNurseryType() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }
        if (! app.dashboard().isThereANurseryFieldWithType()) {
            app.dashboard().createNF(new NurseryFieldData()
                    .withType("MK")
                    .withLocation("SHADEHOUSE")
                    .withPriority("Low")
                    .withPottingDate("10/12/2019")
                    .withForecastDate("10/12/2019")
                    .withSize(32456.00)
                    .withVrcId("5421"));
            app.common().switchToModal();
            String actual = app.common().getDialogText("nf-creation-prompt-title");
            Assert.assertEquals(actual, "Success");
            app.common().closeModal();
        }
        app.common().fullscreen();
        String actual = app.dashboard().selectNurseryTypeAndUpdate("INC");
        app.dashboard().saveUpdatedNurseryType();
        Assert.assertEquals(actual, "INC");
    }
}
