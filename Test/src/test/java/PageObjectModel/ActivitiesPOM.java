package PageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import tractivity.app_manager.helpers.HelpersBase;

public class ActivitiesPOM extends HelpersBase {

    public ActivitiesPOM(WebDriver driver) {
        super(driver);
    }

    //Credentinals
    private final By username = By.id("username");
    private final By pass = By.id("password");
    private final By signButton = By.xpath("//button[@type='submit']");
    private final By timeline = By.cssSelector("div.nfe-report.card div.card-body div.time-line-ctnr ul.time-line:nth-child(1) li div.time-line-item > div.time-line-header");
    private final By timelineLabel = By.cssSelector("ul.time-line:nth-child(1) > li.time-label:nth-child(1)");

    // Collapse sidebar in the Add Events
    private final By earlySeasonTeamCollapseBar = By.xpath("//body/div[@id='root']/div[@class='container']/div[@class='row']/div[@class='col']/div[@class='container']/div[@class='row']/div[@class='col-sm-4']/div[@class='card']/div[@class='card-body']/span/div[1]/div[2]/button[1]/span[1]");
    private final By eventTypeERSCBtn = By.xpath("//button[@value='ERSC']");
    private final By submitNFEEvent = By.xpath("//button[@name='submitNFEEvent']");
    private final By saveEventTypeBtn = By.id("save-nfeType");
    private final By addEventTypeBtn = By.id("nfe-type-adder");
    private final By team = By.id("team");
    private final By newEventType = By.id("eventType");
    private final By addedTypeBtn = By.id("Test Event Type");
    private final By deleteEventTypeBtn = By.id("delete");

    private final By note = By.id("note");
    public By note() { return note; }

    // Form Input Feedback Messages
    By eventDateMessage = By.xpath("//div[contains(text(),'An activity date is required.')]");
    By eventStatusMessage = By.xpath("//div[contains(text(),'Status is required.')]");
    By eventCommentsMessage = By.xpath("//div[contains(text(),'Comments are required when status is not \"Ok\"')]");

    By NFETable = By.cssSelector("div.container div.row div.col div.container div.row div.col-sm-8 div.task-card.card div.task-body.card-body div table.table.table-custom.table-hover > tbody > tr");


    //if running test on the NON-PROD / PROD
    public By userName() { return username; }
    public By password() { return pass; }
    public By pingSignInBtn() { return signButton; }

    public By timeline() { return timeline; }
    public By timelineLabel() { return timelineLabel; }
    public By earlySeasonTeamCollapseBar() { return earlySeasonTeamCollapseBar; }
    public By eventTypeERSCBtn() { return eventTypeERSCBtn; }
    public By submitNFEEvent() { return submitNFEEvent; }
    public By addEventTypeBtn() { return addEventTypeBtn; }
    public By saveEventTypeBtn() { return saveEventTypeBtn; }

    public By team() { return team; }
    public By newEventType() { return newEventType; }
    public By addedTypeBtn() { return addedTypeBtn; }

    public By deleteEventTypeBtn() { return deleteEventTypeBtn; }

    public By eventDateMessage() { return eventDateMessage; }
    public By eventStatusMessage() { return eventStatusMessage; }
    public By eventCommentsMessage() { return eventCommentsMessage; }

    public WebElement NFETable() { return driver.findElement(NFETable); }
}
