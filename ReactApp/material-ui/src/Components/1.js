import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuIcon from "@material-ui/icons/Menu";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import MessageRoundedIcon from "@material-ui/icons/MessageRounded";
import BusinessIcon from "@material-ui/icons/Business";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core/styles";

// media query

var x = window.matchMedia("(max-width: 700px)");

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(0)
	},
	title: {
		flexGrow: 1
	},
	list: {
		width: 250
	},
	fullList: {
		width: "auto"
	}
}));

function Btn() {
	const classes = useStyles();
	const [size, setSize] = useState(x.matches ? false : true);
	const [state, setState] = useState({
		left: false
	});
	const toggleDrawer = (side, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};
	const sideList = (side) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				<ListItem button>
					<ListItemIcon>
						<HomeRoundedIcon />
					</ListItemIcon>
					<ListItemText primary="Home"></ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<InfoRoundedIcon />
					</ListItemIcon>
					<ListItemText primary="About"></ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<MessageRoundedIcon />
					</ListItemIcon>
					<ListItemText primary="Blog"></ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<BusinessIcon />
					</ListItemIcon>
					<ListItemText primary="Partner with us"></ListItemText>
				</ListItem>
			</List>
			<Divider />
			<List>
				{["User", "Logout"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <AccountCircleIcon /> : <ExitToAppIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<AppBar color="primary" position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton}>
						<MenuIcon onClick={toggleDrawer("left", true)} />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						QuickStay
					</Typography>
				</Toolbar>
			</AppBar>
			<AppBar color="primary" position="static">
				<Toolbar>
					<Typography variant="h6">QuickStay</Typography>
					<Typography style={{ marginLeft: "auto" }} variant="button">
						<Button>Home</Button>
						<Button>About</Button>
						<Button>Blog</Button>
						<Button>Parner With Us</Button>
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer open={state.left} onClose={toggleDrawer("left", false)}>
				{sideList("left")}
			</Drawer>
			<Typography variant="h3" gutterBottom>
				QuickStay Rooms
			</Typography>
			<CssBaseline />
			<Container maxWidth="lg">
				<Typography
					component="div"
					style={{ backgroundColor: "#cfe8fc", height: "50vh" }}
				>
					<Typography variant="h4">LET US FIND YOU A COZY HOME</Typography>
				</Typography>
			</Container>
		</div>
	);
}

export default Btn;
