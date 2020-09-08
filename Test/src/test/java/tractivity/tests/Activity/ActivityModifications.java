package tractivity.tests.Activity;

import Model.NurseryFieldActivityData;
import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashSet;
import java.util.List;

public class ActivityModifications extends TestBase {

    @Test(groups = {"ActivityModifications", "updateNurseryFieldActivity"})
    public void updateNurseryFieldActivity() throws Exception {
        if (app.dashboard().isLoaded()) {
            app.goTo().trackActivityPage();
        }

        if (app.activities().isLoaded()) {
            List<NurseryFieldActivityData> activitiesBefore = app.activities().getActivitiesList();
            app.activities().initActivityModition(activitiesBefore.size() - 1);
            NurseryFieldActivityData nurseryFieldActivityData = new NurseryFieldActivityData()
                    .withId(activitiesBefore.get(activitiesBefore.size() - 1).getId())
                    .withDate(DateTimeFormatter.ofPattern("MM/dd/yyy").format(LocalDate.now()))
                    .withComments("Updated comments")
                    .withStatus("Ok")
                    .withContinueingEvent("start");

            app.activities().fillOutNurseryFieldActivityForm(nurseryFieldActivityData);
            app.activities().submitNurseryFieldActivity();
            String actualMsg = app.common().getDialogText("delete-event-generic-title");
            Assert.assertEquals(actualMsg, "Success");
            app.common().closeModal();

            app.common().refreshPage();
            if (app.activities().isLoaded()) {
                activitiesBefore.remove(activitiesBefore.size() - 1);
                activitiesBefore.add(nurseryFieldActivityData);
            }

            List<NurseryFieldActivityData> activitiesAfter = app.activities().getActivitiesList();
            Assert.assertEquals(new HashSet<Object>(activitiesBefore), new HashSet<Object>(activitiesAfter));
            
        }
    }
}
