import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import React from "react";
export default function TweetCard(props) {

  if (props.type === "image") {
    return (
      <Card sx={{ maxWidth: 600, borderRadius: 3, margin: "0.3em" }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon
                sx={{
                  fontSize: "1rem",
                }}
              />
            </IconButton>
          }
          title={props.author}
          titleTypographyProps={{ fontSize: "0.8rem" }}
          //   sx={{ height: 20, padding: "10px" }}
        />
        <CardMedia key={props.index} component="img" image={props.url} />

        {/* <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.username}
          </Typography>
        </CardContent> */}
      </Card>
    );
  } else {
    return (
      <Card sx={{ maxWidth: 600, borderRadius: 3, margin: "0.3em" }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon
                sx={{
                  fontSize: "1rem",
                }}
              />
            </IconButton>
          }
          title={props.author}
          titleTypographyProps={{ fontSize: "0.8rem" }}
          //   sx={{ height: 20, padding: "10px" }}
        />
        <CardMedia
          key={props.index}
          component="video"
          image={props.url}
		  poster={props.preview}
          controls
		  preload="none"
        />
        {/* <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.username}
          </Typography>
        </CardContent> */}
      </Card>
    );
  }
}
