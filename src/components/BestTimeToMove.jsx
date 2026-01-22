export default function BestTimeToMove( {cityDetail} ){
    return(
        <div className="outer-container">
            <h4>Best Time to Move</h4>
            <span>{cityDetail?.bestTimeToMove}</span>
        </div>
    );
}