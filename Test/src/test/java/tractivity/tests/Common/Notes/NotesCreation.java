package tractivity.tests.Common.Notes;

import Model.NotesData;
import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

public class NotesCreation extends TestBase {
    @Test(groups = {"NotesCreationTests", "noteCreation"})
    public void noteCreation() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }
        app.goTo().addActivityPage();
        app.activities().initNoteCreation();
        app.activities().fillOutNote(new NotesData().withPriority("Low").withNote("Random text"));
        app.activities().submitNote();
        String actualMsq = app.common().getDialogText("addActivityPrompt-title");
        Assert.assertEquals(actualMsq, "Success");
        app.common().closeModal();
    }
}
