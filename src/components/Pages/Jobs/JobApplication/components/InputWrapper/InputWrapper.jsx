export const InputWrapper = ({ error, touched,label,labelName,children }) => {
    return (
        <>
            <div className="my-4 w-full">
                <label className="block font-semibold mb-2" htmlFor={labelName} >
                    {label} <span className="text-red-500"> *</span>
                </label>
                {children}
                {error && touched && (
                    <p className="text-red-500 text-xs italic capitalize">
                        {error}
                    </p>
                )}
            </div>

        </>
    )
}
