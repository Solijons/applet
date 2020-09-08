package tractivity.tests.Activity;

import Model.NurseryFieldActivityData;
import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

public class ActivityValidators extends TestBase {
    @Test(groups = {"ActivityValidators", "ValidateWithoutDate"})
    public void validateWithoutDate() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }
        app.goTo().addActivityPage();
        ArrayList<String> teams = app.activities().getTeamsList();
        app.activities().expandTeam(teams.size() - 1);
        app.activities().selectActivity(teams.get(teams.size() - 1));

        app.activities().fillOutNurseryFieldActivityForm(new NurseryFieldActivityData()
                .withStatus("")
                .withComments("Test comments")
                .withContinueingEvent("start")
        );
        app.activities().submitNurseryFieldActivity();

        Assert.assertTrue(app.activities().invalidDateMsg());
        Assert.assertTrue(app.activities().invalidStatusMsg());
    }

    @Test(groups = {"ActivityValidators", "ValidateWithoutComments"})
    public void validateWithoutComments() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }

        app.goTo().addActivityPage();
        ArrayList<String> teams = app.activities().getTeamsList();
        app.activities().expandTeam(teams.size() - 1);
        app.activities().selectActivity(teams.get(teams.size() - 1));

        app.activities().fillOutNurseryFieldActivityForm(new NurseryFieldActivityData()
                .withDate(DateTimeFormatter.ofPattern("MM/dd/yyy").format(LocalDate.now()))
                .withStatus("Trouble")
                .withContinueingEvent("start")
        );

        app.activities().submitNurseryFieldActivity();

        Assert.assertTrue(app.activities().invalidDateMsg());
        Assert.assertTrue(app.activities().invalidCommentsMsg());
    }


    @Test(groups = {"ActivityValidators", "proposedActionFeedback"})
    public void proposedActionFeedback() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }

        app.goTo().addActivityPage();
        ArrayList<String> teams = app.activities().getTeamsList();
        app.activities().expandTeam(teams.size() - 1);
        app.activities().selectActivity(teams.get(teams.size() - 1));

        app.activities().fillOutNurseryFieldActivityForm(new NurseryFieldActivityData()
                .withStatus("Trouble")
                .withContinueingEvent("start")
        );

        app.activities().submitNurseryFieldActivity();
        Assert.assertTrue(app.activities().invalidProposedActionMsg());
    }
}
