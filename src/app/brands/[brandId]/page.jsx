
export default async function BrandId({ params }) {

    const { brandId } = await params; //must use await
    console.log("props sayed", brandId);

    async function getBrandDetails() {
        try {
            const response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`);
            let { data } = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    }

    const data = await getBrandDetails();
    console.log(data);


    return (
        <div className="container mx-auto p-10 text-center font-bold bg-blue-100">
            <div className="flex flex-col w-100 bg-blue-300 p-5">
                <img src={data.image} alt={data._id} />
                <h2 className="mt-4 font-bold text-2xl">{data.name}</h2>
            </div>
        </div>
    );
}