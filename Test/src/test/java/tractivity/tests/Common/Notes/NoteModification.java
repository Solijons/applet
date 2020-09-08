package tractivity.tests.Common.Notes;

import Model.NotesData;
import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

import java.util.ArrayList;
import java.util.Collections;

public class NoteModification extends TestBase {
    @Test(groups = {"NotesModificationTests", "modifyNotes"})
    public void modifyNotes() {
        if (app.dashboard().isLoaded()) {
            app.goTo().trackActivityPage();
        }
        app.activities().initNoteModification();
        app.common().switchToModal();
        app.activities().fillOutNote(new NotesData().withNote("update notes").withPriority("Low"));
        app.activities().submitNote();
        String actualMsg = app.common().getDialogText("prompt-NotesTable-title");
        Assert.assertEquals(actualMsg, "Success");
    }

    @Test(groups = {"NotesModificationTests", "bulkNotesModification"})
    public void bulkNotesModification() {
        if (app.dashboard().isLoaded()) {
            app.goTo().trackActivityPage();
        }
        ArrayList<String> listOfNurseryFields = app.activities().allNurseryFieilds();
        app.activities().initNoteModification();
        app.common().switchToModal();
        app.activities().fillOutNote(new NotesData().withNote("update notes").withPriority("Low"));
        app.activities().checkedBulkUpdateNote();
        app.activities().submitNote();
        app.common().switchToModal();
        ArrayList<String> listOfUpdatingFields = app.activities().noteUpdatingFields();
        Collections.sort(listOfNurseryFields);
        Collections.sort(listOfUpdatingFields);
        for (String nurseryField: listOfUpdatingFields) {
            Assert.assertTrue(listOfNurseryFields.contains(nurseryField));
        }
        app.activities().submitBulkUpdate();
        String actualMsq = app.common().getDialogText("prompt-NotesTable-title");
        Assert.assertEquals(actualMsq, "Success");
    }
}
