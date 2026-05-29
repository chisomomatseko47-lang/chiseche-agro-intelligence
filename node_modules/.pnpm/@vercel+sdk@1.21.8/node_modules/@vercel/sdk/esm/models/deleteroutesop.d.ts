import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteRoutesRequestBody = {
    /**
     * The IDs of the routes to delete
     */
    routeIds: Array<string>;
};
export type DeleteRoutesRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: DeleteRoutesRequestBody | undefined;
};
/**
 * A version of routing rules stored in S3.
 */
export type DeleteRoutesVersion = {
    /**
     * Unique identifier for the version.
     */
    id: string;
    /**
     * The S3 key where the routing rules are stored.
     */
    s3Key: string;
    /**
     * Timestamp of when this version was last modified.
     */
    lastModified: number;
    /**
     * The user who created this version.
     */
    createdBy: string;
    /**
     * Whether this version is staged and not yet promoted to production.
     */
    isStaging?: boolean | undefined;
    /**
     * Whether this version is currently live in production.
     */
    isLive?: boolean | undefined;
    /**
     * The number of routing rules in this version.
     */
    ruleCount?: number | undefined;
    /**
     * The staging alias for previewing this version.
     */
    alias?: string | undefined;
};
export type DeleteRoutesResponseBody = {
    deletedCount: number;
    /**
     * A version of routing rules stored in S3.
     */
    version: DeleteRoutesVersion;
};
/** @internal */
export declare const DeleteRoutesRequestBody$inboundSchema: z.ZodType<DeleteRoutesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRoutesRequestBody$Outbound = {
    routeIds: Array<string>;
};
/** @internal */
export declare const DeleteRoutesRequestBody$outboundSchema: z.ZodType<DeleteRoutesRequestBody$Outbound, z.ZodTypeDef, DeleteRoutesRequestBody>;
export declare function deleteRoutesRequestBodyToJSON(deleteRoutesRequestBody: DeleteRoutesRequestBody): string;
export declare function deleteRoutesRequestBodyFromJSON(jsonString: string): SafeParseResult<DeleteRoutesRequestBody, SDKValidationError>;
/** @internal */
export declare const DeleteRoutesRequest$inboundSchema: z.ZodType<DeleteRoutesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRoutesRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: DeleteRoutesRequestBody$Outbound | undefined;
};
/** @internal */
export declare const DeleteRoutesRequest$outboundSchema: z.ZodType<DeleteRoutesRequest$Outbound, z.ZodTypeDef, DeleteRoutesRequest>;
export declare function deleteRoutesRequestToJSON(deleteRoutesRequest: DeleteRoutesRequest): string;
export declare function deleteRoutesRequestFromJSON(jsonString: string): SafeParseResult<DeleteRoutesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteRoutesVersion$inboundSchema: z.ZodType<DeleteRoutesVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRoutesVersion$Outbound = {
    id: string;
    s3Key: string;
    lastModified: number;
    createdBy: string;
    isStaging?: boolean | undefined;
    isLive?: boolean | undefined;
    ruleCount?: number | undefined;
    alias?: string | undefined;
};
/** @internal */
export declare const DeleteRoutesVersion$outboundSchema: z.ZodType<DeleteRoutesVersion$Outbound, z.ZodTypeDef, DeleteRoutesVersion>;
export declare function deleteRoutesVersionToJSON(deleteRoutesVersion: DeleteRoutesVersion): string;
export declare function deleteRoutesVersionFromJSON(jsonString: string): SafeParseResult<DeleteRoutesVersion, SDKValidationError>;
/** @internal */
export declare const DeleteRoutesResponseBody$inboundSchema: z.ZodType<DeleteRoutesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRoutesResponseBody$Outbound = {
    deletedCount: number;
    version: DeleteRoutesVersion$Outbound;
};
/** @internal */
export declare const DeleteRoutesResponseBody$outboundSchema: z.ZodType<DeleteRoutesResponseBody$Outbound, z.ZodTypeDef, DeleteRoutesResponseBody>;
export declare function deleteRoutesResponseBodyToJSON(deleteRoutesResponseBody: DeleteRoutesResponseBody): string;
export declare function deleteRoutesResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteRoutesResponseBody, SDKValidationError>;
//# sourceMappingURL=deleteroutesop.d.ts.map