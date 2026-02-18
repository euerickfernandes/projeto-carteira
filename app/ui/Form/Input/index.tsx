import styles from '../Form.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: InputProps){
    return (
        <input 
            className={ styles.input }
            type="text" 
            { ...rest } 
        />
    );
}