import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const UpdateRouteVersionsAction: {
    readonly Promote: "promote";
    readonly Restore: "restore";
    readonly Discard: "discard";
};
export type UpdateRouteVersionsAction = ClosedEnum<typeof UpdateRouteVersionsAction>;
export type UpdateRouteVersionsRequestBody = {
    id: string;
    action: UpdateRouteVersionsAction;
};
export type UpdateRouteVersionsRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UpdateRouteVersionsRequestBody | undefined;
};
/**
 * A version of routing rules stored in S3.
 */
export type UpdateRouteVersionsVersion = {
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
export type UpdateRouteVersionsResponseBody = {
    /**
     * A version of routing rules stored in S3.
     */
    version: UpdateRouteVersionsVersion;
};
/** @internal */
export declare const UpdateRouteVersionsAction$inboundSchema: z.ZodNativeEnum<typeof UpdateRouteVersionsAction>;
/** @internal */
export declare const UpdateRouteVersionsAction$outboundSchema: z.ZodNativeEnum<typeof UpdateRouteVersionsAction>;
/** @internal */
export declare const UpdateRouteVersionsRequestBody$inboundSchema: z.ZodType<UpdateRouteVersionsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRouteVersionsRequestBody$Outbound = {
    id: string;
    action: string;
};
/** @internal */
export declare const UpdateRouteVersionsRequestBody$outboundSchema: z.ZodType<UpdateRouteVersionsRequestBody$Outbound, z.ZodTypeDef, UpdateRouteVersionsRequestBody>;
export declare function updateRouteVersionsRequestBodyToJSON(updateRouteVersionsRequestBody: UpdateRouteVersionsRequestBody): string;
export declare function updateRouteVersionsRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateRouteVersionsRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateRouteVersionsRequest$inboundSchema: z.ZodType<UpdateRouteVersionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRouteVersionsRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateRouteVersionsRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateRouteVersionsRequest$outboundSchema: z.ZodType<UpdateRouteVersionsRequest$Outbound, z.ZodTypeDef, UpdateRouteVersionsRequest>;
export declare function updateRouteVersionsRequestToJSON(updateRouteVersionsRequest: UpdateRouteVersionsRequest): string;
export declare function updateRouteVersionsRequestFromJSON(jsonString: string): SafeParseResult<UpdateRouteVersionsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateRouteVersionsVersion$inboundSchema: z.ZodType<UpdateRouteVersionsVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRouteVersionsVersion$Outbound = {
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
export declare const UpdateRouteVersionsVersion$outboundSchema: z.ZodType<UpdateRouteVersionsVersion$Outbound, z.ZodTypeDef, UpdateRouteVersionsVersion>;
export declare function updateRouteVersionsVersionToJSON(updateRouteVersionsVersion: UpdateRouteVersionsVersion): string;
export declare function updateRouteVersionsVersionFromJSON(jsonString: string): SafeParseResult<UpdateRouteVersionsVersion, SDKValidationError>;
/** @internal */
export declare const UpdateRouteVersionsResponseBody$inboundSchema: z.ZodType<UpdateRouteVersionsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRouteVersionsResponseBody$Outbound = {
    version: UpdateRouteVersionsVersion$Outbound;
};
/** @internal */
export declare const UpdateRouteVersionsResponseBody$outboundSchema: z.ZodType<UpdateRouteVersionsResponseBody$Outbound, z.ZodTypeDef, UpdateRouteVersionsResponseBody>;
export declare function updateRouteVersionsResponseBodyToJSON(updateRouteVersionsResponseBody: UpdateRouteVersionsResponseBody): string;
export declare function updateRouteVersionsResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateRouteVersionsResponseBody, SDKValidationError>;
//# sourceMappingURL=updaterouteversionsop.d.ts.map