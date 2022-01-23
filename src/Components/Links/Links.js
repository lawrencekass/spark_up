import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as FontAwesome from "react-icons/fa";
import { GetNavigation } from "../../Services/ReadData";
import {withRouter, Link} from 'react-router-dom'

const Links = (props) => {
  const [navlist, setNavlist] = useState([]);
const {history} = props

  useEffect(() => {
    GetNavigation("read-navigation-menu.php").then((result) => {
        setNavlist(result);
      });
      console.log(navlist); 
    // fetch("http://localhost:3001/links/")
    //   .then(response => response.json())
    //   .then(data => setData(data));
  }, []);
  
  const link = () => {
    return (
      <List>
        {navlist.map((item) => {
          const faIcon = FontAwesome[item.icon]
          const click = () => history.push(item.link)
          
          return (
            <ListItem button key={item.menuName} onClick={click}>
              {React.createElement(faIcon) && <ListItemIcon>{React.createElement(faIcon)}</ListItemIcon>}
              <ListItemText primary={item.menuName}/>
            </ListItem>
          );
        })}
      </List>
    );
  };

  return <div>{link()}</div>;
};

export default withRouter(Links);
