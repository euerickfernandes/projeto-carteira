import styles from './ProgressBar.module.css';

type ProgressBarType = {
    max: number,
    value: number
}

export default function ProgressBar({ max, value }: ProgressBarType){
    const progressWidth = value * 100 / max;

    return (
        <div className={ styles.progressBar }>
            <div className={ styles.progressValue } style={{ width: `${progressWidth}%` }}></div>
        </div>
    );
}