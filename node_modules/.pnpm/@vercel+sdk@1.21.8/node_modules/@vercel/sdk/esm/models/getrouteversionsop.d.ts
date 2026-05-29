import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetRouteVersionsRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/**
 * A version of routing rules stored in S3.
 */
export type GetRouteVersionsVersions = {
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
export type GetRouteVersionsResponseBody = {
    versions: Array<GetRouteVersionsVersions>;
};
/** @internal */
export declare const GetRouteVersionsRequest$inboundSchema: z.ZodType<GetRouteVersionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRouteVersionsRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetRouteVersionsRequest$outboundSchema: z.ZodType<GetRouteVersionsRequest$Outbound, z.ZodTypeDef, GetRouteVersionsRequest>;
export declare function getRouteVersionsRequestToJSON(getRouteVersionsRequest: GetRouteVersionsRequest): string;
export declare function getRouteVersionsRequestFromJSON(jsonString: string): SafeParseResult<GetRouteVersionsRequest, SDKValidationError>;
/** @internal */
export declare const GetRouteVersionsVersions$inboundSchema: z.ZodType<GetRouteVersionsVersions, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRouteVersionsVersions$Outbound = {
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
export declare const GetRouteVersionsVersions$outboundSchema: z.ZodType<GetRouteVersionsVersions$Outbound, z.ZodTypeDef, GetRouteVersionsVersions>;
export declare function getRouteVersionsVersionsToJSON(getRouteVersionsVersions: GetRouteVersionsVersions): string;
export declare function getRouteVersionsVersionsFromJSON(jsonString: string): SafeParseResult<GetRouteVersionsVersions, SDKValidationError>;
/** @internal */
export declare const GetRouteVersionsResponseBody$inboundSchema: z.ZodType<GetRouteVersionsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRouteVersionsResponseBody$Outbound = {
    versions: Array<GetRouteVersionsVersions$Outbound>;
};
/** @internal */
export declare const GetRouteVersionsResponseBody$outboundSchema: z.ZodType<GetRouteVersionsResponseBody$Outbound, z.ZodTypeDef, GetRouteVersionsResponseBody>;
export declare function getRouteVersionsResponseBodyToJSON(getRouteVersionsResponseBody: GetRouteVersionsResponseBody): string;
export declare function getRouteVersionsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetRouteVersionsResponseBody, SDKValidationError>;
//# sourceMappingURL=getrouteversionsop.d.ts.map