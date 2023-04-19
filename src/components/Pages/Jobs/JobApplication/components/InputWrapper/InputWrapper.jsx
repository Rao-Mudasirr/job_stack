export const InputWrapper = ({ error, touched,label,labelName,children }) => {
    return (
        <>
            <div className="my-4">
                <label className="block font-semibold mb-2" htmlFor={labelName} >
                    {label} <span className="text-red-500"> *</span>
                </label>
                {children}
                {error && touched && (
                    <p className="text-red-500 text-xs italic">
                        {error}
                    </p>
                )}
            </div>

        </>
    )
}
