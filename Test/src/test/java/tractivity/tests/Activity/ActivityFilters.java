package tractivity.tests.Activity;

import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

import java.util.ArrayList;


public class ActivityFilters extends TestBase {
    @Test(groups = {"ActivityFilters", "setActiveFiltersByWeek"})
    public void setActiveFiltersByWeek() {
        if (app.dashboard().isLoaded()) {
            app.goTo().trackActivityPage();
        }

        if (app.activities().isLoaded()) {
            String expectedWeek = app.activities().setFilterByWeek();
            ArrayList<String> actualWeeks = app.activities().activitiesByWeek();
            for (String week : actualWeeks) {
                Assert.assertEquals(week, expectedWeek);
            }
        }
    }

    @Test(groups = {"ActivityFilters", "setActiveFiltersByActivityType"})
    public void setActiveFiltersByActivityType() {
        if (app.dashboard().isLoaded()) {
            app.goTo().trackActivityPage();
        }
        if (app.activities().isLoaded()) {
            String expectedActivityType = app.activities().setFilterByActivityType();
            ArrayList<String> actualActivityType = app.activities().activitiesByActivityType();
            for (String activityType : actualActivityType) {
                Assert.assertEquals(activityType, expectedActivityType);
            }
        }
    }

    @Test(groups = {"ActivityFilters", "setActiveFiltersByActivityType"})
    public void setActivityFilterByStartEndDate() {
        if (app.dashboard().isLoaded()) {
            app.common().fullscreen();
            app.goTo().trackActivityPage();
        }
        if (app.activities().isLoaded()) {
            int[] expectedWeeks = app.activities().setFilterByStartEndWeek();
            ArrayList<String> actualWeeks = app.activities().activitiesByWeek();
            for (int week: expectedWeeks) {
                Assert.assertTrue(actualWeeks.contains(String.valueOf(week)));
            }
        }
    }

    @Test(groups = {"ActivityFilters", "setActiveFiltersByNurseryType"})
    public void setActiveFiltersByNurseryType() {
        if (app.dashboard().isLoaded()) {
            app.common().fullscreen();
            app.goTo().trackActivityPage();
        }
        if (app.activities().isLoaded()) {
            String expectedNurseryType = app.activities().setFilterByNurseryType();
            ArrayList<String> actualNurseryTypes = app.activities().activitiesByNurseryTypes();
            for (String nurseryType: actualNurseryTypes) {
                Assert.assertEquals(nurseryType, expectedNurseryType);
            }
        }
    }

}
