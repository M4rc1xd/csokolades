interface ChocolateCardProps {
    name: string;
    brand: string;
    isDark: boolean;
    cocoaPercentage: number;
    ingredients: string[];
}

export default function ChocolateCard(props: ChocolateCardProps){
    return (
        <>
        <div className="chocolate-card" style={{ backgroundColor: props.isDark ? "#333" : "#fff" , color: props.isDark ? "#fff" : "#000" }}>
            <p>Csoki neve: {props.name}</p>
            <p>Gyártó: {props.brand}</p>
            <p>Csokoládé százaléka: {props.cocoaPercentage}%</p>
            <p>Összetevők: {props.ingredients.join(", ")}</p>
            <p>Ez {props.isDark ? "ét" : "tej"}csokoládé vagy masmilyen.</p>
        </div>
        </>
    )
}