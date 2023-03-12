import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getNews } from "../service/api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Indivedual = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    const dailyNews = async () => {
      const response = await getNews();
      const data = await response.data;
      setData(data);
    };
    dailyNews();
  }, []);

  return (
    <div className="single__page">
      {data
        .filter((n) => {
          return n._id == id;
        })
        .map((item) => {
          return (
            <Card sx={{ maxWidth: 1000 }}>
              <CardMedia
                sx={{ height: 350 }}
                image={item.url}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>short by</b>: {item.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{item.publisher}</Button>
                <Button size="small">{item.timestamp}</Button>
              </CardActions>
            </Card>
          );
        })}
    </div>
  );
};

export default Indivedual;
