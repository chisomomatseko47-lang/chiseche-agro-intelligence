import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Headers = {};
export declare const StageRoutesType: {
    readonly Host: "host";
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type StageRoutesType = ClosedEnum<typeof StageRoutesType>;
export type Has = {
    type?: StageRoutesType | undefined;
    key?: string | undefined;
    value?: string | undefined;
};
export declare const StageRoutesProjectRoutesType: {
    readonly Host: "host";
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type StageRoutesProjectRoutesType = ClosedEnum<typeof StageRoutesProjectRoutesType>;
export type Missing = {
    type?: StageRoutesProjectRoutesType | undefined;
    key?: string | undefined;
    value?: string | undefined;
};
export declare const StageRoutesProjectRoutesRequestType: {
    readonly RequestHeaders: "request.headers";
    readonly RequestQuery: "request.query";
    readonly ResponseHeaders: "response.headers";
};
export type StageRoutesProjectRoutesRequestType = ClosedEnum<typeof StageRoutesProjectRoutesRequestType>;
export declare const Op: {
    readonly Append: "append";
    readonly Set: "set";
    readonly Delete: "delete";
};
export type Op = ClosedEnum<typeof Op>;
export type StageRoutesTarget = {};
export type StageRoutesTransforms = {
    type?: StageRoutesProjectRoutesRequestType | undefined;
    op?: Op | undefined;
    target?: StageRoutesTarget | undefined;
    args?: any | undefined;
    env?: Array<string> | undefined;
};
export type Route = {
    src: string;
    dest?: string | undefined;
    headers?: Headers | undefined;
    caseSensitive?: boolean | undefined;
    status?: number | undefined;
    has?: Array<Has> | undefined;
    missing?: Array<Missing> | undefined;
    transforms?: Array<StageRoutesTransforms> | undefined;
    respectOriginCacheControl?: boolean | undefined;
};
export type Routes = {
    id: string;
    name: string;
    description?: string | undefined;
    enabled?: boolean | undefined;
    route: Route;
};
export type StageRoutesRequestBody = {
    overwrite?: boolean | undefined;
    routes?: Array<Routes> | undefined;
};
export type StageRoutesRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: StageRoutesRequestBody | undefined;
};
/**
 * A version of routing rules stored in S3.
 */
export type StageRoutesVersion = {
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
export type StageRoutesResponseBody = {
    /**
     * A version of routing rules stored in S3.
     */
    version: StageRoutesVersion;
};
/** @internal */
export declare const Headers$inboundSchema: z.ZodType<Headers, z.ZodTypeDef, unknown>;
/** @internal */
export type Headers$Outbound = {};
/** @internal */
export declare const Headers$outboundSchema: z.ZodType<Headers$Outbound, z.ZodTypeDef, Headers>;
export declare function headersToJSON(headers: Headers): string;
export declare function headersFromJSON(jsonString: string): SafeParseResult<Headers, SDKValidationError>;
/** @internal */
export declare const StageRoutesType$inboundSchema: z.ZodNativeEnum<typeof StageRoutesType>;
/** @internal */
export declare const StageRoutesType$outboundSchema: z.ZodNativeEnum<typeof StageRoutesType>;
/** @internal */
export declare const Has$inboundSchema: z.ZodType<Has, z.ZodTypeDef, unknown>;
/** @internal */
export type Has$Outbound = {
    type?: string | undefined;
    key?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export declare const Has$outboundSchema: z.ZodType<Has$Outbound, z.ZodTypeDef, Has>;
export declare function hasToJSON(has: Has): string;
export declare function hasFromJSON(jsonString: string): SafeParseResult<Has, SDKValidationError>;
/** @internal */
export declare const StageRoutesProjectRoutesType$inboundSchema: z.ZodNativeEnum<typeof StageRoutesProjectRoutesType>;
/** @internal */
export declare const StageRoutesProjectRoutesType$outboundSchema: z.ZodNativeEnum<typeof StageRoutesProjectRoutesType>;
/** @internal */
export declare const Missing$inboundSchema: z.ZodType<Missing, z.ZodTypeDef, unknown>;
/** @internal */
export type Missing$Outbound = {
    type?: string | undefined;
    key?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export declare const Missing$outboundSchema: z.ZodType<Missing$Outbound, z.ZodTypeDef, Missing>;
export declare function missingToJSON(missing: Missing): string;
export declare function missingFromJSON(jsonString: string): SafeParseResult<Missing, SDKValidationError>;
/** @internal */
export declare const StageRoutesProjectRoutesRequestType$inboundSchema: z.ZodNativeEnum<typeof StageRoutesProjectRoutesRequestType>;
/** @internal */
export declare const StageRoutesProjectRoutesRequestType$outboundSchema: z.ZodNativeEnum<typeof StageRoutesProjectRoutesRequestType>;
/** @internal */
export declare const Op$inboundSchema: z.ZodNativeEnum<typeof Op>;
/** @internal */
export declare const Op$outboundSchema: z.ZodNativeEnum<typeof Op>;
/** @internal */
export declare const StageRoutesTarget$inboundSchema: z.ZodType<StageRoutesTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type StageRoutesTarget$Outbound = {};
/** @internal */
export declare const StageRoutesTarget$outboundSchema: z.ZodType<StageRoutesTarget$Outbound, z.ZodTypeDef, StageRoutesTarget>;
export declare function stageRoutesTargetToJSON(stageRoutesTarget: StageRoutesTarget): string;
export declare function stageRoutesTargetFromJSON(jsonString: string): SafeParseResult<StageRoutesTarget, SDKValidationError>;
/** @internal */
export declare const StageRoutesTransforms$inboundSchema: z.ZodType<StageRoutesTransforms, z.ZodTypeDef, unknown>;
/** @internal */
export type StageRoutesTransforms$Outbound = {
    type?: string | undefined;
    op?: string | undefined;
    target?: StageRoutesTarget$Outbound | undefined;
    args?: any | undefined;
    env?: Array<string> | undefined;
};
/** @internal */
export declare const StageRoutesTransforms$outboundSchema: z.ZodType<StageRoutesTransforms$Outbound, z.ZodTypeDef, StageRoutesTransforms>;
export declare function stageRoutesTransformsToJSON(stageRoutesTransforms: StageRoutesTransforms): string;
export declare function stageRoutesTransformsFromJSON(jsonString: string): SafeParseResult<StageRoutesTransforms, SDKValidationError>;
/** @internal */
export declare const Route$inboundSchema: z.ZodType<Route, z.ZodTypeDef, unknown>;
/** @internal */
export type Route$Outbound = {
    src: string;
    dest?: string | undefined;
    headers?: Headers$Outbound | undefined;
    caseSensitive?: boolean | undefined;
    status?: number | undefined;
    has?: Array<Has$Outbound> | undefined;
    missing?: Array<Missing$Outbound> | undefined;
    transforms?: Array<StageRoutesTransforms$Outbound> | undefined;
    respectOriginCacheControl?: boolean | undefined;
};
/** @internal */
export declare const Route$outboundSchema: z.ZodType<Route$Outbound, z.ZodTypeDef, Route>;
export declare function routeToJSON(route: Route): string;
export declare function routeFromJSON(jsonString: string): SafeParseResult<Route, SDKValidationError>;
/** @internal */
export declare const Routes$inboundSchema: z.ZodType<Routes, z.ZodTypeDef, unknown>;
/** @internal */
export type Routes$Outbound = {
    id: string;
    name: string;
    description?: string | undefined;
    enabled?: boolean | undefined;
    route: Route$Outbound;
};
/** @internal */
export declare const Routes$outboundSchema: z.ZodType<Routes$Outbound, z.ZodTypeDef, Routes>;
export declare function routesToJSON(routes: Routes): string;
export declare function routesFromJSON(jsonString: string): SafeParseResult<Routes, SDKValidationError>;
/** @internal */
export declare const StageRoutesRequestBody$inboundSchema: z.ZodType<StageRoutesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type StageRoutesRequestBody$Outbound = {
    overwrite?: boolean | undefined;
    routes?: Array<Routes$Outbound> | undefined;
};
/** @internal */
export declare const StageRoutesRequestBody$outboundSchema: z.ZodType<StageRoutesRequestBody$Outbound, z.ZodTypeDef, StageRoutesRequestBody>;
export declare function stageRoutesRequestBodyToJSON(stageRoutesRequestBody: StageRoutesRequestBody): string;
export declare function stageRoutesRequestBodyFromJSON(jsonString: string): SafeParseResult<StageRoutesRequestBody, SDKValidationError>;
/** @internal */
export declare const StageRoutesRequest$inboundSchema: z.ZodType<StageRoutesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type StageRoutesRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: StageRoutesRequestBody$Outbound | undefined;
};
/** @internal */
export declare const StageRoutesRequest$outboundSchema: z.ZodType<StageRoutesRequest$Outbound, z.ZodTypeDef, StageRoutesRequest>;
export declare function stageRoutesRequestToJSON(stageRoutesRequest: StageRoutesRequest): string;
export declare function stageRoutesRequestFromJSON(jsonString: string): SafeParseResult<StageRoutesRequest, SDKValidationError>;
/** @internal */
export declare const StageRoutesVersion$inboundSchema: z.ZodType<StageRoutesVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type StageRoutesVersion$Outbound = {
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
export declare const StageRoutesVersion$outboundSchema: z.ZodType<StageRoutesVersion$Outbound, z.ZodTypeDef, StageRoutesVersion>;
export declare function stageRoutesVersionToJSON(stageRoutesVersion: StageRoutesVersion): string;
export declare function stageRoutesVersionFromJSON(jsonString: string): SafeParseResult<StageRoutesVersion, SDKValidationError>;
/** @internal */
export declare const StageRoutesResponseBody$inboundSchema: z.ZodType<StageRoutesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type StageRoutesResponseBody$Outbound = {
    version: StageRoutesVersion$Outbound;
};
/** @internal */
export declare const StageRoutesResponseBody$outboundSchema: z.ZodType<StageRoutesResponseBody$Outbound, z.ZodTypeDef, StageRoutesResponseBody>;
export declare function stageRoutesResponseBodyToJSON(stageRoutesResponseBody: StageRoutesResponseBody): string;
export declare function stageRoutesResponseBodyFromJSON(jsonString: string): SafeParseResult<StageRoutesResponseBody, SDKValidationError>;
//# sourceMappingURL=stageroutesop.d.ts.map