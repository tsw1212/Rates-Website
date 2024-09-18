const request = async (url, method) => {

    let headers = {
        "Content-Type": "application/json",
    };

    const config = {
        method,
        headers,
    };

    try {
        const response = await fetch(url, config);
        const responseBody = await response.json();

        if (!response.ok) {
            throw new Error(responseBody.message || response.statusText);
        }
        return {
            ok: true,
            statusCode: response.status,
            body: responseBody,
        };
    } catch (error) {
        return {
            ok: false,
            statusCode: error.response ? error.response.status : 500,
            body: { message: error.message },
        };
    }
};

export const getRequest = (url) => request(url, "GET", null );
