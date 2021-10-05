const Loading = () => {
    // const [loadingText, setLoadingText] = useState("Loading");

    // while (true){
    //     setTimeout(setLoadingText("Loading."), 0.3);
    //     setTimeout(setLoadingText("Loading.."), 0.3);
    //     setTimeout(setLoadingText("Loading..."), 0.3);
    // }

    return ( 
        <div className="loading">
            <img src="pokeball.png" id="loading-image" className="rotation"/>
            <p>Loading...</p>
        </div>
     );
}
 
export default Loading;