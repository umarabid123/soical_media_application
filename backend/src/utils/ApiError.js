class APiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong!",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode = statusCode,
        this.data=null,
        this.errors = errors,
        this.success=false,
        this.message = message

    }
}