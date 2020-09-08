package tractivity.tests.Dashboard;

import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class Validators extends TestBase {
    @Test(groups = {"Validators", "calcActiveSRETest"})
    public void calcActiveSRETest() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }
        app.common().fullscreen();
        app.common().expandDetailsViewTable();
        float expectedSREs = app.dashboard().totalActiveSREs();
        float actualSREs = app.dashboard().countSREs();
        Assert.assertEquals(actualSREs, expectedSREs, "the difference is " + (actualSREs - expectedSREs));
        assertThat(actualSREs, equalTo(expectedSREs));
    }

    @Test(groups = {"Validators", "createNFFormValidationTest"})
    public void createNFFormValidationTest() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().initNurseryFieldCreation();
        }
        app.dashboard().submitNFCreation();
        Assert.assertTrue(app.dashboard().invalidFieldMsg());
        Assert.assertTrue(app.dashboard().invalidTypeMsg());
        Assert.assertTrue(app.dashboard().invalidSizeMsg());
        Assert.assertTrue(app.dashboard().invalidForecastedDateMsg());
    }

    @Test(groups = {"Validators", "timelineDateFormatTest"})
    public void timelineDateFormatTest() {
        String pattern = "^\\d{2} [JFMASOND][a-z]{2} 20\\d{2}$";
        Pattern r = Pattern.compile(pattern);
        String line = app.dashboard().timelineDate();
        Matcher m = r.matcher(line);
        Assert.assertTrue(m.find());
    }

    @Test(groups = {"Validators", "timelineSortedTest"})
    public void timelineSortedTest() {
        if (app.dashboard().isLoaded()) {
            ArrayList<String> dates = app.dashboard().timelineDates();
            boolean sorted = true;
            Iterator<String> iter = dates.iterator();
            String currentDate, prevDate = iter.next();
            while (iter.hasNext()) {
                currentDate = iter.next();
                if (prevDate.compareTo(currentDate) > 0) {
                    sorted = false;
                }
                prevDate = currentDate;
            }
            Assert.assertFalse(sorted);
        }
    }

}
