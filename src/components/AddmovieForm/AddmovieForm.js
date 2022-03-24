import styles from "./Addmovie.module.css";

function AddmovieForm(){
    return(
        <div className={styles.container}>
            <div className={styles.formLeft}>
                <img src="https://picsum.photos/600/400" alt="" className={styles.formImage} />
            </div>

            <div className={styles.formRight}>
                <h2 className={styles.formTitle}>Add Movie</h2>

                <form action="#">
                    <div className={styles.formControl}>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" className={styles.formInput} />
                    </div>

                    <div className={styles.formControl}>
                        <label htmlFor="year">Year</label>
                        <input id="year" type="text" className={styles.formInput} />
                    </div>
                    <button type="submit" className={styles.formButton}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddmovieForm;