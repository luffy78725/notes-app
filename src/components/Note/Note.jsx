import cs from "./note.module.css";
import { classNames as cx } from "../../utils";
import PropTypes from "proptypes";

export default function Note({ title, description, createdAt, reminderFor }) {
  return (
    <div className="card mt-2 mb-2" style={{ width: "100%" }}>
      <div className={cx("card-body", cs["note"])}>
        <h5
          className={cx(
            "card-title h6 pt-1 pb-1 text-center text-uppercase  border-bottom border-light",
            cs["note-title"]
          )}
        >
          {title}
        </h5>
        <div className={cs["note-text-wrapper"]}>
          <em>Added for : {reminderFor}</em>
          <p className={cx("card-text text-center pl-4 pr-4", cs["note-text"])}>
            {description}
          </p>
        </div>
        <div className="text-center mt-2  pt-1 pb-1 border-top border-light">
          <em>{createdAt}</em>
        </div>
      </div>
    </div>
  );
}

Note.propTypes = {
  /** Title of the note*/
  title: PropTypes.string,

  /** Content of the note*/
  description: PropTypes.string,

  /** created timestamp of the note*/
  createdAt: PropTypes.string,

  /** Date for which Note is added*/
  reminderFor: PropTypes.string,
};
