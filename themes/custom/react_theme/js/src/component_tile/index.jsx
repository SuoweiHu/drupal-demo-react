
import React        from 'react';
import ReactDOM     from 'react-dom/client';
import Card         from '@mui/material/Card';
import CardActions  from '@mui/material/CardActions';
import CardContent  from '@mui/material/CardContent';
import CardMedia    from '@mui/material/CardMedia';
import Button       from '@mui/material/Button';
import Typography   from '@mui/material/Typography';

// ===========================================================================
// Constructor for tile of well defined attributes/variables & render function
class Tile {
    constructor(data_json) {
      this.title        = data_json.title;
      this.description  = data_json.description;
      this.link         = data_json.link;
      this.img_src      = data_json.img_src;
    }
    renderTile_ver1(){
        return (
            <div style={{width:"300px", height:"500px", background:"gray", overflow:"hidden"}}>
                <a href={this.link}>
                    <img src={this.img_src} style={{height:"250px"}}/>
                    <h2>{this.title      } </h2>
                    <p> {this.description } </p>
                </a>
            </div>
        );
    }
    renderTile_ver2(){
        return(
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 250 }}
                image={this.img_src}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {this.description }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href={this.link} size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
    render(){
        return this.renderTile_ver2();
    }
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

document.querySelectorAll('react-tile-component').forEach((dom_component) => {

    // Getting data from the twig rendered html
    const data_jsonString  = dom_component.dataset.json;
    const data_json        = JSON.parse(data_jsonString);
                             console.log(data_jsonString);
                             console.log(data_json);
    // Initialize new tile object, and render component
    const tile = new Tile(data_json);
    ReactDOM.createRoot(dom_component).render(tile.render());
});

console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
