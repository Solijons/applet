import { WithStyles } from '@material-ui/core/styles';
import styles from './style';


/**
 * Interface is used to create generic prompt header
 * @ignore
 */
export interface IGenericHeader extends WithStyles<typeof styles> {
    children: React.ReactNode;
    id: string;
    onClose: () => void;
}

export interface IGenericPrompt {
    actionText?: string;
    body: JSX.Element[] | JSX.Element;
    closeText?: string;
    id: string;
    onAction?: () => void;
    onClose?: () => void;
    open: boolean;
    title: string;
}