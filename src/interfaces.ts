export interface ResponseError extends Error {
	status?: string;
	response?: Response;
}
