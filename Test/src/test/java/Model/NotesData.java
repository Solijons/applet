package Model;

public class NotesData {
    public String getCreatedAt() {
        return createdAt;
    }

    public NotesData withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public int getId() {
        return id;
    }

    public NotesData withId(int id) {
        this.id = id;
        return this;
    }

    public String getModifiedAt() {
        return modifiedAt;
    }

    public NotesData withModifiedAt(String modifiedAt) {
        this.modifiedAt = modifiedAt;
        return this;
    }

    public String getNote() {
        return note;
    }

    public NotesData withNote(String note) {
        this.note = note;
        return this;
    }

    public int getNurseryField() {
        return nurseryField;
    }

    public NotesData withNurseryField(int nurseryField) {
        this.nurseryField = nurseryField;
        return this;
    }

    public String getPriority() {
        return priority;
    }

    public NotesData withPriority(String priority) {
        this.priority = priority;
        return this;
    }

    private String createdAt;
    private int id;
    private String modifiedAt;
    private String note;
    private int nurseryField;
    private String priority;
}
