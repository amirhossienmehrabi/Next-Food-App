
function Instruction() {
    return (
        <>
            <div className="flex flex-col justify-center">
                <h3 className="text-center md:text-left my-4 font-bold text-xl md:text-2xl text-green-400">How To Order?</h3>
                <div>
                    <ul className="leading-8 list-disc ml-4">
                        <li>Sign in (or create an account) and set your delivery address.</li>
                        <li>Choose the restaurant you want to order from.</li>
                        <li>Select your items and tap “Add to Cart”.</li>
                        <li>To place your order, select “View cart” or “Checkout”.</li>
                        <li>Review your order and tap “Place Order”...</li>
                        <li>Track your order progress.</li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Instruction
