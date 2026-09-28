interface ChocolateCardProps {
    name: string;
    brand: string;
    isDark: boolean;
    cocoaPercentage: number;
    ingredients: string[];
}

export default function ChocolateCard(props: ChocolateCardProps){
    return 
        <>
        <p>Csoki neve: {props.name}</p>
        <p>Gyártó: {props.brand}</p>
        <p>Csokoládé százaléka: {props.cocoaPercentage}%</p>
        <p>Összetevők: {props.ingredients.join(", ")}</p>
        </>
    
}