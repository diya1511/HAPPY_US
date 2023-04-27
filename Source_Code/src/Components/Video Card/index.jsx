import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";
// import "./global.css";

function VideoCard() {
  return (
    <Card
      style={{
        width: "25%",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      <Card.Img
        variant="top"
        src="/video-card-image.jpg"
        style={{ borderRadius: "0.3125rem" }}
      />
      <Card.Body
        style={{
          border: "black",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          padding: "0.25rem",
        }}
      >
        <Card.Title
          style={{
            fontSize: "var(--title-2-medium-size)",
            lineHeight: "1.75rem",
            fontWeight: "500",
            fontFamily: "var(--title-2-medium)",
            color: "var(--text-color)",
            textAlign: "left",
          }}
        >
          Be more with less
        </Card.Title>
        <Card.Text>
          Some quick example text..&nbsp;&nbsp;&nbsp;&nbsp;-Olivia Rhye
        </Card.Text>
        <Button
          variant="primary"
          style={{
            fontSize: "var(--callout-bold-size)",
            lineHeight: "1.31rem",
            fontWeight: "600",
            fontFamily: "var(--callout-bold)",
            color: "var(--white)",
            cursor: "pointer",
            border: 0,
            padding: "var(--padding-3xs) var(--padding-base)",
            backgroundColor: "var(--primary)",
            borderRadius: "var(--br-81xl)",
            overflow: "hidden",
            justifyContent: "flex-start",
            gap: "var(--gap-4xs)",
            marginTop: "0.5rem"
          }}
        >
          Join Now
        </Button>
      </Card.Body>
    </Card>
  );
}
// position: relative;
// font-size: var(--callout-bold-size);
// line-height: 1.31rem;
// font-weight: 600;
// font-family: var(--callout-bold);
// color: var(--white);
// text-align: left;

export default VideoCard;
