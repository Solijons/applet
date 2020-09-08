package Model;

public class NurseryFieldActivityData {
    public String getComments() {
        return comments;
    }

    public NurseryFieldActivityData withComments(String comments) {
        this.comments = comments;
        return this;
    }

    public String getContinueingEvent() {
        return continueingEvent;
    }

    public NurseryFieldActivityData withContinueingEvent(String continueingEvent) {
        this.continueingEvent = continueingEvent;
        return this;
    }

    public String getDate() {
        return date;
    }

    public NurseryFieldActivityData withDate(String date) {
        this.date = date;
        return this;
    }

    public String getField() {
        return field;
    }

    @Override
    public String toString() {
        return "NurseryFieldActivityData{" +
                "comments='" + comments + '\'' +
                ", id=" + id +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        NurseryFieldActivityData that = (NurseryFieldActivityData) o;

        if (id != that.id) return false;
        if (nurseryField != that.nurseryField) return false;
        if (comments != null ? !comments.equals(that.comments) : that.comments != null) return false;
        if (continueingEvent != null ? !continueingEvent.equals(that.continueingEvent) : that.continueingEvent != null)
            return false;
        if (date != null ? !date.equals(that.date) : that.date != null) return false;
        if (field != null ? !field.equals(that.field) : that.field != null) return false;
        if (proposedAction != null ? !proposedAction.equals(that.proposedAction) : that.proposedAction != null)
            return false;
        if (site != null ? !site.equals(that.site) : that.site != null) return false;
        if (status != null ? !status.equals(that.status) : that.status != null) return false;
        if (team != null ? !team.equals(that.team) : that.team != null) return false;
        return type != null ? type.equals(that.type) : that.type == null;
    }

    @Override
    public int hashCode() {
        int result = comments != null ? comments.hashCode() : 0;
        result = 31 * result + (continueingEvent != null ? continueingEvent.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (field != null ? field.hashCode() : 0);
        result = 31 * result + id;
        result = 31 * result + nurseryField;
        result = 31 * result + (proposedAction != null ? proposedAction.hashCode() : 0);
        result = 31 * result + (site != null ? site.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (team != null ? team.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        return result;
    }

    public NurseryFieldActivityData withField(String field) {
        this.field = field;
        return this;
    }

    public int getId() {
        return id;
    }

    public NurseryFieldActivityData withId(int id) {
        this.id = id;
        return this;
    }

    public int getNurseryField() {
        return nurseryField;
    }

    public NurseryFieldActivityData withNurseryField(int nurseryField) {
        this.nurseryField = nurseryField;
        return this;
    }

    public String getProposedAction() {
        return proposedAction;
    }

    public NurseryFieldActivityData withProposedAction(String proposedAction) {
        this.proposedAction = proposedAction;
        return this;
    }

    public String getSite() {
        return site;
    }

    public NurseryFieldActivityData withSite(String site) {
        this.site = site;
        return this;
    }

    public String getStatus() {
        return status;
    }

    public NurseryFieldActivityData withStatus(String status) {
        this.status = status;
        return this;
    }

    public String getTeam() {
        return team;
    }

    public NurseryFieldActivityData withTeam(String team) {
        this.team = team;
        return this;
    }

    public String getType() {
        return type;
    }

    public NurseryFieldActivityData withType(String type) {
        this.type = type;
        return this;
    }

    private String comments;
    private String continueingEvent;
    private String date;
    private String field;
    private int id;
    private int nurseryField;
    private String proposedAction;
    private String site;

    private String status;
    private String team;
    private String type;
}
