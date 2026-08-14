function loading() {
    return (
        <section className="w-screen h-screen flex items-center justify-center">
            <div className="size-10 border-2 border-dashed border-primary animate-spin rounded-full flex items-center justify-center">
                <span className="size-2 rounded-full bg-primary animate-ping" />
            </div>
        </section>
    )
}

export default loading