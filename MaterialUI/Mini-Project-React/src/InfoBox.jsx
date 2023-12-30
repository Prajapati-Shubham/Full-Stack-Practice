import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const IMG_ULR="https://images.unsplash.com/photo-1545134969-8debd725b007?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return(
    <div className="infoBx">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={IMG_ULR}
        title="green iguana"
      />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
            <p>Temprature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>Min Temprtature={info.tempMin}&deg;C</p>
            <p>Max Temprature={info.tempMax}&deg;C</p>
            <p>THe Weather can be describes as <i>{info.weather.toUpperCase()}</i> and feels like{info.feelsLike}</p>
            </Typography>
        </CardContent>
        </Card>
    </div>
        
    )
}