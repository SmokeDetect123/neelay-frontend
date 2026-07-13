interface Props {

    className?: string;

}

export default function AppLogo({

    className,

}: Props) {

    return (

        <div

            className={`flex flex-col items-center ${className}`}

        >

            <h1 className="text-3xl font-bold">

                Neelay

            </h1>

            <p className="text-sm text-slate-500">

                Service Report System

            </p>

        </div>

    );

}