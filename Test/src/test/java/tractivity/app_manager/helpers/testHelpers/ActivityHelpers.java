package tractivity.app_manager.helpers.testHelpers;

import Model.ActivityTypeData;
import Model.NotesData;
import Model.NurseryFieldActivityData;
import PageObjectModel.ActivitiesPOM;
import PageObjectModel.GlobalPOM;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import tractivity.app_manager.helpers.HelpersBase;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.WeekFields;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class ActivityHelpers extends HelpersBase {

    public ActivityHelpers(WebDriver driver) {
        super(driver);
    }
    GlobalPOM globalPOM = new GlobalPOM();
    ActivitiesPOM activitiesPOM = new ActivitiesPOM(driver);

    public ArrayList<String> allNurseryFieilds() {
        ArrayList<String> fields = new ArrayList<>();
        List<WebElement> fieldsElements = driver.findElements(By.xpath("//h5[1]"));
        for (WebElement fieldElement: fieldsElements) {
            fields.add(fieldElement.getAttribute("id"));
        }
        return fields;
    }

    public ArrayList<String> activitiesByWeek() {
        ArrayList<String> listOfTdWeeks = new ArrayList<>();
        List<WebElement> tdWeeks = driver.findElements(By.cssSelector(".event-item > td:nth-child(3)"));
        for (WebElement tdWeek: tdWeeks) {
            listOfTdWeeks.add(tdWeek.getText());
        }
        return listOfTdWeeks;
    }

    public boolean isLoaded() {
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.className("overflowScroll")))).isDisplayed();
        return isElementPresent(By.className("overflowScroll"));
    }

    public void checkedBulkUpdateNote() {
        click(By.name("bulk-update"));
    }

    public void expandTeam(int index) {
        driver.findElements(By.xpath("//button[@aria-label='Add']")).get(index).click();
    }

    public void initNoteModification() {
        click(By.cssSelector("#noteTableBody > tr.table-item:nth-child(1) > td:nth-child(4) > button"));
    }

    public void initNoteCreation() {
        click(By.id("addNoteBtn"));
    }

    public void fillOutNote(NotesData notesData) {
        click(globalPOM.priority());
        click(By.xpath("//li[contains(text(),'" + notesData.getPriority() + "')]"));
        type(activitiesPOM.note(), notesData.getNote());
    }

    public void submitNote() {
        click(By.name("submitNFNote"));
    }

    public ArrayList<String> noteUpdatingFields() {
        ArrayList<String> listOfFieldsToUpdate = new ArrayList<>();
        List<WebElement> fieldsElements = driver.findElements(By.className("field"));
        for (WebElement field: fieldsElements) {
            listOfFieldsToUpdate.add(field.getText());
        }
        return listOfFieldsToUpdate;
    }

    public void submitBulkUpdate() {
        click(By.id("Submit"));
    }

    public boolean invalidNoteMsg() {
        return driver.findElement(By.id("note-helper-text")).isDisplayed();
    }

    public ArrayList<String> getTeamsList() {
        ArrayList<String> teams = new ArrayList<>();
        List<WebElement> teamsElems = driver.findElements(By.xpath("//button[@aria-label='Add']"));
        for (WebElement element: teamsElems) {
            teams.add(element.getAttribute("id"));
        }
        return teams;
    }

    public void selectActivity(String team) {
        wait.until(ExpectedConditions.visibilityOfAllElements(driver.findElements(By.className("AddEventTypeButton"))));
        List<WebElement> list = driver.findElements(By.xpath("//div[@class='AddEventTypeButton " + team + "']"));
        list.get(0).findElement(By.xpath("//button[@value='" + list.get(0).getText() + "']")).click();
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//span[contains(text(),'" + team + "')]")))).isDisplayed();
    }

    public void submitNurseryFieldActivity() {
        click(By.name("submitNFEEvent"));
    }

    public void fillOutNurseryFieldActivityForm(NurseryFieldActivityData nurseryFieldActivityData) {
        type(By.id("date"), nurseryFieldActivityData.getDate());
        type(By.id("comments"), nurseryFieldActivityData.getComments());
        click(By.xpath("//input[@value='" + nurseryFieldActivityData.getContinueingEvent() + "']"));
        click(By.id("status"));
        click(By.xpath("//li[contains(text(),'" + nurseryFieldActivityData.getStatus() + "')]"));
    }

    public void initActivityTypeCreation() {
        click(By.id("nfe-type-adder"));
    }

    public void fillOutActivityTypeForm(ActivityTypeData activityTypeData) {
        click(By.xpath("//div[contains(text(),'Select a team...')]"));
        click(By.xpath("//li[contains(text(),'" + activityTypeData.getTeam() + "')]"));
        type(By.id("eventType"), activityTypeData.getActivityType());
    }

    public void submitActivityTypeCreation() {
        click(By.id("Submit"));
    }

    public boolean isNewActivityTypeAdded(String newActivityType) {
        return isElementPresent(By.xpath("//div[contains(text(),'" + newActivityType + "')]"));
    }

    public void createActivityType(ActivityTypeData activityTypeData) {
        initActivityTypeCreation();
        fillOutActivityTypeForm(activityTypeData);
        submitActivityTypeCreation();
    }

    public void initActivityTypeDeletion(String activityType) {
        click(By.xpath("//button[@id='" + activityType + "']"));
    }

    public String selectedTeam() {
        return driver.findElement(By.xpath("//th[@class='MuiTableCell-root MuiTableCell-body']")).getText();
    }

    public String selectedActivityType() {
        return driver.findElement(By.xpath("//td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight']")).getText();
    }

    public void delete() {
        click(By.id("Delete"));
    }

    public boolean deleteActivityType(String activityType) {
        try {
           return isElementPresent(By.id("//button[@id='" + activityType + "']"));
        } catch (NoSuchElementException e) {
           return false;
        }
    }

    public String setFilterByWeek() {
        List<WebElement> weeksElements = driver.findElements(By.className("week"));
        String week = weeksElements.get(0).getText();
        click(By.xpath("//input[@value='" + week + "']"));
        return week;
    }


    public String setFilterByActivityType() {
        wait.until(ExpectedConditions.visibilityOfAllElements(driver.findElements(By.className("activityType"))));
        List<WebElement> activityTypesElements = driver.findElements(By.className("activityType"));
        String activityType = activityTypesElements.get(0).getText();
        click(By.xpath("//input[@value='" + activityType + "']"));
        return activityType;
    }

    public ArrayList<String> activitiesByActivityType() {
        ArrayList<String> listOfTdActivityType = new ArrayList<>();
        List<WebElement> tdActivities = driver.findElements(By.cssSelector(".event-item > td:nth-child(1)"));
        for (WebElement tdActivity: tdActivities) {
            listOfTdActivityType.add(tdActivity.getText());
        }
        return listOfTdActivityType;
    }

    public int[] setFilterByStartEndWeek() {
        LocalDate startDate = LocalDate.now().minusDays(7);
        LocalDate endDate = LocalDate.now().minusDays(1);
        WeekFields weeks = WeekFields.of(Locale.getDefault());
        int[] actualWeeks = {startDate.get(weeks.weekOfWeekBasedYear())};
        type(By.id("startDate"), DateTimeFormatter.ofPattern("MM/dd/yyy").format(startDate));
        type(By.id("endDate"), DateTimeFormatter.ofPattern("MM/dd/yyy").format(endDate));
        return actualWeeks;

    }

    public String setFilterByNurseryType() {
        wait.until(ExpectedConditions.visibilityOfAllElements(driver.findElements(By.className("nyrseryTypes"))));
        List<WebElement> nyrseryTypesElements = driver.findElements(By.className("nyrseryTypes"));
        String nyrseryType = nyrseryTypesElements.get(0).getText();
        click(By.xpath("//input[@value='" + nyrseryType + "']"));
        return nyrseryType;
    }

    public ArrayList<String> activitiesByNurseryTypes() {
        ArrayList<String> nyrseryTypesIds = new ArrayList<>();
        List<WebElement> nurseryTypesElements = driver.findElements(By.cssSelector(".nurseryField > p"));
        for (WebElement nyrseryTypeElement: nurseryTypesElements) {
            nyrseryTypesIds.add(nyrseryTypeElement.getAttribute("id"));
        }
        return nyrseryTypesIds;
    }

    public void initActivityModition(int index) {
        driver.findElements(By.cssSelector(".event-item > td:nth-child(7)")).get(index).click();
    }

    public boolean invalidDateMsg() {
        return isElementPresent(By.id("date-helper-text"));
    }

    public boolean invalidStatusMsg() {
        return isElementPresent(By.xpath("//p[contains(text(),'Status is required.')]"));
    }

    public boolean invalidCommentsMsg() {
        return isElementPresent(By.id("comments-helper-text"));
    }

    public boolean invalidProposedActionMsg() {
        return isElementPresent(By.id("proposedAction-helper-text"));
    }

    public List<NurseryFieldActivityData> getActivitiesList() {
        List<NurseryFieldActivityData> activities = new ArrayList<>();
        List<WebElement> elements = driver.findElements(By.xpath("//tr[@class='MuiTableRow-root event-item']"));
        for (WebElement element: elements) {
            String activity = element.findElement(By.xpath(".//td[1]")).getText();
            String id = element.findElement(By.xpath(".//td[1]")).getAttribute("id");
            NurseryFieldActivityData nurseryFieldActivityData = new NurseryFieldActivityData().withComments(activity).withId(Integer.parseInt(id));
            activities.add(nurseryFieldActivityData);
        }
        return  activities;
    }
}
