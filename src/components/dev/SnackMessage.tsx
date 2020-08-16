/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
// import Button from '@material-ui/core/Button'
// import classnames from 'classnames'
// import Collapse from '@material-ui/core/Collapse'
// import Paper from '@material-ui/core/Paper'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flexGrow: 1,
        backgroundColor: '#fddc6c',
        [theme.breakpoints.up('sm')]: {
            flexGrow: 'initial',
            minWidth: 344,
        },
    },
    typography: {
        fontWeight: 'bold',
    },
    actionRoot: {
        padding: '8px 8px 8px 16px',
    },
    icons: {
        marginLeft: 'auto',
    },
    expand: {
        padding: '8px 8px',
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    collapse: {
        padding: 16,
    },
    checkIcon: {
        fontSize: 20,
        color: '#b3b3b3',
        paddingRight: 4,
    },
    button: {
        padding: 0,
        textTransform: 'none',
    },
}));

interface ISnackMessageProps {
    id: React.ReactText;
    message: React.ReactNode;
}

const SnackMessage: React.FC<ISnackMessageProps> = forwardRef((props, ref) => {
    const classes = useStyles();
    const { closeSnackbar } = useSnackbar();
    // const [expanded, setExpanded] = useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    const handleDismiss = () => {
        closeSnackbar(props.id);
    };

    return (
        <Card className={classes.card} ref={ref}>
            <CardActions classes={{ root: classes.actionRoot }}>
                <Typography variant="subtitle2" className={classes.typography}>{props.message}</Typography>
                <div className={classes.icons}>
                    <IconButton className={classes.expand} onClick={handleDismiss}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
});

export default SnackMessage