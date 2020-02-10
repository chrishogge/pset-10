module org.openjfx.javafx_archetype_fxml {
    requires javafx.controls;
    requires javafx.fxml;
	requires javafx.web;

    opens org.openjfx.javafx_archetype_fxml to javafx.fxml;
    exports org.openjfx.javafx_archetype_fxml;
}