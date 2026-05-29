import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Pattern syntax type. If not provided, inferred from pattern.
 */
export declare const EditRouteSrcSyntax: {
    readonly Equals: "equals";
    readonly PathToRegexp: "path-to-regexp";
    readonly Regex: "regex";
};
/**
 * Pattern syntax type. If not provided, inferred from pattern.
 */
export type EditRouteSrcSyntax = ClosedEnum<typeof EditRouteSrcSyntax>;
export type EditRouteHeaders = {};
export declare const EditRouteType: {
    readonly Host: "host";
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type EditRouteType = ClosedEnum<typeof EditRouteType>;
export type EditRouteHas = {
    type?: EditRouteType | undefined;
    key?: string | undefined;
    value?: string | undefined;
};
export declare const EditRouteProjectRoutesType: {
    readonly Host: "host";
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type EditRouteProjectRoutesType = ClosedEnum<typeof EditRouteProjectRoutesType>;
export type EditRouteMissing = {
    type?: EditRouteProjectRoutesType | undefined;
    key?: string | undefined;
    value?: string | undefined;
};
export declare const EditRouteProjectRoutesRequestType: {
    readonly RequestHeaders: "request.headers";
    readonly RequestQuery: "request.query";
    readonly ResponseHeaders: "response.headers";
};
export type EditRouteProjectRoutesRequestType = ClosedEnum<typeof EditRouteProjectRoutesRequestType>;
export declare const EditRouteOp: {
    readonly Append: "append";
    readonly Set: "set";
    readonly Delete: "delete";
};
export type EditRouteOp = ClosedEnum<typeof EditRouteOp>;
export type EditRouteTarget = {};
export type EditRouteTransforms = {
    type?: EditRouteProjectRoutesRequestType | undefined;
    op?: EditRouteOp | undefined;
    target?: EditRouteTarget | undefined;
    args?: any | undefined;
    env?: Array<string> | undefined;
};
export type EditRouteProjectRoutesRoute = {
    src: string;
    dest?: string | undefined;
    headers?: EditRouteHeaders | undefined;
    caseSensitive?: boolean | undefined;
    status?: number | undefined;
    has?: Array<EditRouteHas> | undefined;
    missing?: Array<EditRouteMissing> | undefined;
    transforms?: Array<EditRouteTransforms> | undefined;
    respectOriginCacheControl?: boolean | undefined;
};
/**
 * The full route object to replace the existing route with
 */
export type EditRouteRoute = {
    name: string;
    description?: string | undefined;
    enabled?: boolean | undefined;
    /**
     * Pattern syntax type. If not provided, inferred from pattern.
     */
    srcSyntax?: EditRouteSrcSyntax | undefined;
    route: EditRouteProjectRoutesRoute;
};
export type EditRouteRequestBody = {
    /**
     * The full route object to replace the existing route with
     */
    route?: EditRouteRoute | undefined;
    /**
     * If true, restores the staged route to the value in the production version.
     */
    restore?: boolean | undefined;
};
export type EditRouteRequest = {
    projectId: string;
    routeId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: EditRouteRequestBody | undefined;
};
export declare const EditRouteRouteType: {
    readonly Rewrite: "rewrite";
    readonly Redirect: "redirect";
    readonly SetStatus: "set_status";
    readonly Transform: "transform";
};
export type EditRouteRouteType = ClosedEnum<typeof EditRouteRouteType>;
export declare const EditRouteHasProjectRoutesType: {
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type EditRouteHasProjectRoutesType = ClosedEnum<typeof EditRouteHasProjectRoutesType>;
export type EditRouteValueProjectRoutesEq = string | number;
export type EditRouteValueProjectRoutes2 = {
    eq?: string | number | undefined;
    neq?: string | undefined;
    inc?: Array<string> | undefined;
    ninc?: Array<string> | undefined;
    pre?: string | undefined;
    suf?: string | undefined;
    re?: string | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
};
export type EditRouteHasProjectRoutesValue = string | EditRouteValueProjectRoutes2;
export type EditRouteHas2 = {
    type: EditRouteHasProjectRoutesType;
    key: string;
    value?: string | EditRouteValueProjectRoutes2 | undefined;
};
export type EditRouteValueEq = string | number;
export type EditRouteValue2 = {
    eq?: string | number | undefined;
    neq?: string | undefined;
    inc?: Array<string> | undefined;
    ninc?: Array<string> | undefined;
    pre?: string | undefined;
    suf?: string | undefined;
    re?: string | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
};
export type EditRouteHasValue = string | EditRouteValue2;
export type EditRouteHas1 = {
    type: "host";
    value: string | EditRouteValue2;
};
export type EditRouteProjectRoutesHas = EditRouteHas1 | (EditRouteHas2 & {
    type: "header";
}) | (EditRouteHas2 & {
    type: "cookie";
}) | (EditRouteHas2 & {
    type: "query";
});
export declare const EditRouteMissingProjectRoutesType: {
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type EditRouteMissingProjectRoutesType = ClosedEnum<typeof EditRouteMissingProjectRoutesType>;
export type EditRouteValueProjectRoutesResponse200Eq = string | number;
export type EditRouteValueProjectRoutesResponse2002 = {
    eq?: string | number | undefined;
    neq?: string | undefined;
    inc?: Array<string> | undefined;
    ninc?: Array<string> | undefined;
    pre?: string | undefined;
    suf?: string | undefined;
    re?: string | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
};
export type EditRouteMissingProjectRoutesValue = string | EditRouteValueProjectRoutesResponse2002;
export type EditRouteMissing2 = {
    type: EditRouteMissingProjectRoutesType;
    key: string;
    value?: string | EditRouteValueProjectRoutesResponse2002 | undefined;
};
export type EditRouteValueProjectRoutesResponseEq = string | number;
export type EditRouteValueProjectRoutesResponse2 = {
    eq?: string | number | undefined;
    neq?: string | undefined;
    inc?: Array<string> | undefined;
    ninc?: Array<string> | undefined;
    pre?: string | undefined;
    suf?: string | undefined;
    re?: string | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
};
export type EditRouteMissingValue = string | EditRouteValueProjectRoutesResponse2;
export type EditRouteMissing1 = {
    type: "host";
    value: string | EditRouteValueProjectRoutesResponse2;
};
export type EditRouteProjectRoutesMissing = EditRouteMissing1 | (EditRouteMissing2 & {
    type: "header";
}) | (EditRouteMissing2 & {
    type: "cookie";
}) | (EditRouteMissing2 & {
    type: "query";
});
export declare const EditRouteAction: {
    readonly Challenge: "challenge";
    readonly Deny: "deny";
};
export type EditRouteAction = ClosedEnum<typeof EditRouteAction>;
export type EditRouteMitigate = {
    action: EditRouteAction;
};
export declare const EditRouteProjectRoutesResponseType: {
    readonly RequestHeaders: "request.headers";
    readonly RequestQuery: "request.query";
    readonly ResponseHeaders: "response.headers";
};
export type EditRouteProjectRoutesResponseType = ClosedEnum<typeof EditRouteProjectRoutesResponseType>;
export declare const EditRouteProjectRoutesOp: {
    readonly Append: "append";
    readonly Set: "set";
    readonly Delete: "delete";
};
export type EditRouteProjectRoutesOp = ClosedEnum<typeof EditRouteProjectRoutesOp>;
export type EditRouteKeyEq = string | number;
export type EditRouteKey2 = {
    eq?: string | number | undefined;
    neq?: string | undefined;
    inc?: Array<string> | undefined;
    ninc?: Array<string> | undefined;
    pre?: string | undefined;
    suf?: string | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
};
export type EditRouteKey = string | EditRouteKey2;
export type EditRouteProjectRoutesTarget = {
    key: string | EditRouteKey2;
};
export type EditRouteArgs = string | Array<string>;
export type EditRouteProjectRoutesTransforms = {
    type: EditRouteProjectRoutesResponseType;
    op: EditRouteProjectRoutesOp;
    target: EditRouteProjectRoutesTarget;
    args?: string | Array<string> | undefined;
    env?: Array<string> | undefined;
};
export type EditRouteLocale = {
    redirect?: {
        [k: string]: string;
    } | undefined;
    cookie?: string | undefined;
};
/**
 * The route definition from @vercel/routing-utils.
 */
export type EditRouteProjectRoutesResponse200Route = {
    src: string;
    dest?: string | undefined;
    headers?: {
        [k: string]: string;
    } | undefined;
    methods?: Array<string> | undefined;
    continue?: boolean | undefined;
    override?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    check?: boolean | undefined;
    important?: boolean | undefined;
    status?: number | undefined;
    has?: Array<EditRouteHas1 | (EditRouteHas2 & {
        type: "header";
    }) | (EditRouteHas2 & {
        type: "cookie";
    }) | (EditRouteHas2 & {
        type: "query";
    })> | undefined;
    missing?: Array<EditRouteMissing1 | (EditRouteMissing2 & {
        type: "header";
    }) | (EditRouteMissing2 & {
        type: "cookie";
    }) | (EditRouteMissing2 & {
        type: "query";
    })> | undefined;
    mitigate?: EditRouteMitigate | undefined;
    transforms?: Array<EditRouteProjectRoutesTransforms> | undefined;
    env?: Array<string> | undefined;
    locale?: EditRouteLocale | undefined;
    /**
     * Aliases for `src`, `dest`, and `status`. These provide consistency with the `rewrites`, `redirects`, and `headers` fields which use `source`, `destination`, and `statusCode`. During normalization, these are converted to their canonical forms (`src`, `dest`, `status`) and stripped from the route object.
     */
    source?: string | undefined;
    destination?: string | undefined;
    statusCode?: number | undefined;
    /**
     * A middleware key within the `output` key under the build result. Overrides a `middleware` definition.
     */
    middlewarePath?: string | undefined;
    /**
     * The original middleware matchers.
     */
    middlewareRawSrc?: Array<string> | undefined;
    /**
     * A middleware index in the `middleware` key under the build result
     */
    middleware?: number | undefined;
    respectOriginCacheControl?: boolean | undefined;
};
/**
 * The syntax type of the source pattern. Determines how the pattern is compiled to regex.
 */
export declare const EditRouteProjectRoutesSrcSyntax: {
    readonly Equals: "equals";
    readonly PathToRegexp: "path-to-regexp";
    readonly Regex: "regex";
};
/**
 * The syntax type of the source pattern. Determines how the pattern is compiled to regex.
 */
export type EditRouteProjectRoutesSrcSyntax = ClosedEnum<typeof EditRouteProjectRoutesSrcSyntax>;
export type EditRouteProjectRoutesResponseRoute = {
    routeType?: EditRouteRouteType | undefined;
    /**
     * Unique identifier for the routing rule.
     */
    id: string;
    /**
     * Human-readable name for the routing rule.
     */
    name: string;
    /**
     * Optional description of what the routing rule does.
     */
    description?: string | undefined;
    /**
     * Whether the routing rule is enabled. Defaults to true.
     */
    enabled?: boolean | undefined;
    /**
     * Whether this route is new and not yet published to production. Set to true only when a route is first created via add-route. Cleared (set to false) when a version is promoted to production.
     */
    staged?: boolean | undefined;
    /**
     * The route definition from @vercel/routing-utils.
     */
    route: EditRouteProjectRoutesResponse200Route;
    /**
     * Original source pattern provided by user (path-to-regexp or regex). Used to display the user's input in API responses.
     */
    rawSrc?: string | undefined;
    /**
     * Original destination provided by user.
     */
    rawDest?: string | undefined;
    /**
     * The syntax type of the source pattern. Determines how the pattern is compiled to regex.
     */
    srcSyntax?: EditRouteProjectRoutesSrcSyntax | undefined;
};
/**
 * A version of routing rules stored in S3.
 */
export type EditRouteVersion = {
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
export type EditRouteResponseBody = {
    route?: EditRouteProjectRoutesResponseRoute | undefined;
    /**
     * A version of routing rules stored in S3.
     */
    version: EditRouteVersion;
};
/** @internal */
export declare const EditRouteSrcSyntax$inboundSchema: z.ZodNativeEnum<typeof EditRouteSrcSyntax>;
/** @internal */
export declare const EditRouteSrcSyntax$outboundSchema: z.ZodNativeEnum<typeof EditRouteSrcSyntax>;
/** @internal */
export declare const EditRouteHeaders$inboundSchema: z.ZodType<EditRouteHeaders, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteHeaders$Outbound = {};
/** @internal */
export declare const EditRouteHeaders$outboundSchema: z.ZodType<EditRouteHeaders$Outbound, z.ZodTypeDef, EditRouteHeaders>;
export declare function editRouteHeadersToJSON(editRouteHeaders: EditRouteHeaders): string;
export declare function editRouteHeadersFromJSON(jsonString: string): SafeParseResult<EditRouteHeaders, SDKValidationError>;
/** @internal */
export declare const EditRouteType$inboundSchema: z.ZodNativeEnum<typeof EditRouteType>;
/** @internal */
export declare const EditRouteType$outboundSchema: z.ZodNativeEnum<typeof EditRouteType>;
/** @internal */
export declare const EditRouteHas$inboundSchema: z.ZodType<EditRouteHas, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteHas$Outbound = {
    type?: string | undefined;
    key?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export declare const EditRouteHas$outboundSchema: z.ZodType<EditRouteHas$Outbound, z.ZodTypeDef, EditRouteHas>;
export declare function editRouteHasToJSON(editRouteHas: EditRouteHas): string;
export declare function editRouteHasFromJSON(jsonString: string): SafeParseResult<EditRouteHas, SDKValidationError>;
/** @internal */
export declare const EditRouteProjectRoutesType$inboundSchema: z.ZodNativeEnum<typeof EditRouteProjectRoutesType>;
/** @internal */
export declare const EditRouteProjectRoutesType$outboundSchema: z.ZodNativeEnum<typeof EditRouteProjectRoutesType>;
/** @internal */
export declare const EditRouteMissing$inboundSchema: z.ZodType<EditRouteMissing, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteMissing$Outbound = {
    type?: string | undefined;
    key?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export declare const EditRouteMissing$outboundSchema: z.ZodType<EditRouteMissing$Outbound, z.ZodTypeDef, EditRouteMissing>;
export declare function editRouteMissingToJSON(editRouteMissing: EditRouteMissing): string;
export declare function editRouteMissingFromJSON(jsonString: string): SafeParseResult<EditRouteMissing, SDKValidationError>;
/** @internal */
export declare const EditRouteProjectRoutesRequestType$inboundSchema: z.ZodNativeEnum<typeof EditRouteProjectRoutesRequestType>;
/** @internal */
export declare const EditRouteProjectRoutesRequestType$outboundSchema: z.ZodNativeEnum<typeof EditRouteProjectRoutesRequestType>;
/** @internal */
export declare const EditRouteOp$inboundSchema: z.ZodNativeEnum<typeof EditRouteOp>;
/** @internal */
export declare const EditRouteOp$outboundSchema: z.ZodNativeEnum<typeof EditRouteOp>;
/** @internal */
export declare const EditRouteTarget$inboundSchema: z.ZodType<EditRouteTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteTarget$Outbound = {};
/** @internal */
export declare const EditRouteTarget$outboundSchema: z.ZodType<EditRouteTarget$Outbound, z.ZodTypeDef, EditRouteTarget>;
export declare function editRouteTargetToJSON(editRouteTarget: EditRouteTarget): string;
export declare function editRouteTargetFromJSON(jsonString: string): SafeParseResult<EditRouteTarget, SDKValidationError>;
/** @internal */
export declare const EditRouteTransforms$inboundSchema: z.ZodType<EditRouteTransforms, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteTransforms$Outbound = {
    type?: string | undefined;
    op?: string | undefined;
    target?: EditRouteTarget$Outbound | undefined;
    args?: any | undefined;
    env?: Array<string> | undefined;
};
/** @internal */
export declare const EditRouteTransforms$outboundSchema: z.ZodType<EditRouteTransforms$Outbound, z.ZodTypeDef, EditRouteTransforms>;
export declare function editRouteTransformsToJSON(editRouteTransforms: EditRouteTransforms): string;
export declare function editRouteTransformsFromJSON(jsonString: string): SafeParseResult<EditRouteTransforms, SDKValidationError>;
/** @internal */
export declare const EditRouteProjectRoutesRoute$inboundSchema: z.ZodType<EditRouteProjectRoutesRoute, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteProjectRoutesRoute$Outbound = {
    src: string;
    dest?: string | undefined;
    headers?: EditRouteHeaders$Outbound | undefined;
    caseSensitive?: boolean | undefined;
    status?: number | undefined;
    has?: Array<EditRouteHas$Outbound> | undefined;
    missing?: Array<EditRouteMissing$Outbound> | undefined;
    transforms?: Array<EditRouteTransforms$Outbound> | undefined;
    respectOriginCacheControl?: boolean | undefined;
};
/** @internal */
export declare const EditRouteProjectRoutesRoute$outboundSchema: z.ZodType<EditRouteProjectRoutesRoute$Outbound, z.ZodTypeDef, EditRouteProjectRoutesRoute>;
export declare function editRouteProjectRoutesRouteToJSON(editRouteProjectRoutesRoute: EditRouteProjectRoutesRoute): string;
export declare function editRouteProjectRoutesRouteFromJSON(jsonString: string): SafeParseResult<EditRouteProjectRoutesRoute, SDKValidationError>;
/** @internal */
export declare const EditRouteRoute$inboundSchema: z.ZodType<EditRouteRoute, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteRoute$Outbound = {
    name: string;
    description?: string | undefined;
    enabled?: boolean | undefined;
    srcSyntax?: string | undefined;
    route: EditRouteProjectRoutesRoute$Outbound;
};
/** @internal */
export declare const EditRouteRoute$outboundSchema: z.ZodType<EditRouteRoute$Outbound, z.ZodTypeDef, EditRouteRoute>;
export declare function editRouteRouteToJSON(editRouteRoute: EditRouteRoute): string;
export declare function editRouteRouteFromJSON(jsonString: string): SafeParseResult<EditRouteRoute, SDKValidationError>;
/** @internal */
export declare const EditRouteRequestBody$inboundSchema: z.ZodType<EditRouteRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteRequestBody$Outbound = {
    route?: EditRouteRoute$Outbound | undefined;
    restore?: boolean | undefined;
};
/** @internal */
export declare const EditRouteRequestBody$outboundSchema: z.ZodType<EditRouteRequestBody$Outbound, z.ZodTypeDef, EditRouteRequestBody>;
export declare function editRouteRequestBodyToJSON(editRouteRequestBody: EditRouteRequestBody): string;
export declare function editRouteRequestBodyFromJSON(jsonString: string): SafeParseResult<EditRouteRequestBody, SDKValidationError>;
/** @internal */
export declare const EditRouteRequest$inboundSchema: z.ZodType<EditRouteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteRequest$Outbound = {
    projectId: string;
    routeId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: EditRouteRequestBody$Outbound | undefined;
};
/** @internal */
export declare const EditRouteRequest$outboundSchema: z.ZodType<EditRouteRequest$Outbound, z.ZodTypeDef, EditRouteRequest>;
export declare function editRouteRequestToJSON(editRouteRequest: EditRouteRequest): string;
export declare function editRouteRequestFromJSON(jsonString: string): SafeParseResult<EditRouteRequest, SDKValidationError>;
/** @internal */
export declare const EditRouteRouteType$inboundSchema: z.ZodNativeEnum<typeof EditRouteRouteType>;
/** @internal */
export declare const EditRouteRouteType$outboundSchema: z.ZodNativeEnum<typeof EditRouteRouteType>;
/** @internal */
export declare const EditRouteHasProjectRoutesType$inboundSchema: z.ZodNativeEnum<typeof EditRouteHasProjectRoutesType>;
/** @internal */
export declare const EditRouteHasProjectRoutesType$outboundSchema: z.ZodNativeEnum<typeof EditRouteHasProjectRoutesType>;
/** @internal */
export declare const EditRouteValueProjectRoutesEq$inboundSchema: z.ZodType<EditRouteValueProjectRoutesEq, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteValueProjectRoutesEq$Outbound = string | number;
/** @internal */
export declare const EditRouteValueProjectRoutesEq$outboundSchema: z.ZodType<EditRouteValueProjectRoutesEq$Outbound, z.ZodTypeDef, EditRouteValueProjectRoutesEq>;
export declare function editRouteValueProjectRoutesEqToJSON(editRouteValueProjectRoutesEq: EditRouteValueProjectRoutesEq): string;
export declare function editRouteValueProjectRoutesEqFromJSON(jsonString: string): SafeParseResult<EditRouteValueProjectRoutesEq, SDKValidationError>;
/** @internal */
export declare const EditRouteValueProjectRoutes2$inboundSchema: z.ZodType<EditRouteValueProjectRoutes2, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteValueProjectRoutes2$Outbound = {
    eq?: string | number | undefined;
    neq?: string | undefined;
    inc?: Array<string> | undefined;
    ninc?: Array<string> | undefined;
    pre?: string | undefined;
    suf?: string | undefined;
    re?: string | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
};
/** @internal */
export declare const EditRouteValueProjectRoutes2$outboundSchema: z.ZodType<EditRouteValueProjectRoutes2$Outbound, z.ZodTypeDef, EditRouteValueProjectRoutes2>;
export declare function editRouteValueProjectRoutes2ToJSON(editRouteValueProjectRoutes2: EditRouteValueProjectRoutes2): string;
export declare function editRouteValueProjectRoutes2FromJSON(jsonString: string): SafeParseResult<EditRouteValueProjectRoutes2, SDKValidationError>;
/** @internal */
export declare const EditRouteHasProjectRoutesValue$inboundSchema: z.ZodType<EditRouteHasProjectRoutesValue, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteHasProjectRoutesValue$Outbound = string | EditRouteValueProjectRoutes2$Outbound;
/** @internal */
export declare const EditRouteHasProjectRoutesValue$outboundSchema: z.ZodType<EditRouteHasProjectRoutesValue$Outbound, z.ZodTypeDef, EditRouteHasProjectRoutesValue>;
export declare function editRouteHasProjectRoutesValueToJSON(editRouteHasProjectRoutesValue: EditRouteHasProjectRoutesValue): string;
export declare function editRouteHasProjectRoutesValueFromJSON(jsonString: string): SafeParseResult<EditRouteHasProjectRoutesValue, SDKValidationError>;
/** @internal */
export declare const EditRouteHas2$inboundSchema: z.ZodType<EditRouteHas2, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteHas2$Outbound = {
    type: string;
    key: string;
    value?: string | EditRouteValueProjectRoutes2$Outbound | undefined;
};
/** @internal */
export declare const EditRouteHas2$outboundSchema: z.ZodType<EditRouteHas2$Outbound, z.ZodTypeDef, EditRouteHas2>;
export declare function editRouteHas2ToJSON(editRouteHas2: EditRouteHas2): string;
export declare function editRouteHas2FromJSON(jsonString: string): SafeParseResult<EditRouteHas2, SDKValidationError>;
/** @internal */
export declare const EditRouteValueEq$inboundSchema: z.ZodType<EditRouteValueEq, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteValueEq$Outbound = string | number;
/** @internal */
export declare const EditRouteValueEq$outboundSchema: z.ZodType<EditRouteValueEq$Outbound, z.ZodTypeDef, EditRouteValueEq>;
export declare function editRouteValueEqToJSON(editRouteValueEq: EditRouteValueEq): string;
export declare function editRouteValueEqFromJSON(jsonString: string): SafeParseResult<EditRouteValueEq, SDKValidationError>;
/** @internal */
export declare const EditRouteValue2$inboundSchema: z.ZodType<EditRouteValue2, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteValue2$Outbound = {
    eq?: string | number | undefined;
    neq?: string | undefined;
    inc?: Array<string> | undefined;
    ninc?: Array<string> | undefined;
    pre?: string | undefined;
    suf?: string | undefined;
    re?: string | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
};
/** @internal */
export declare const EditRouteValue2$outboundSchema: z.ZodType<EditRouteValue2$Outbound, z.ZodTypeDef, EditRouteValue2>;
export declare function editRouteValue2ToJSON(editRouteValue2: EditRouteValue2): string;
export declare function editRouteValue2FromJSON(jsonString: string): SafeParseResult<EditRouteValue2, SDKValidationError>;
/** @internal */
export declare const EditRouteHasValue$inboundSchema: z.ZodType<EditRouteHasValue, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteHasValue$Outbound = string | EditRouteValue2$Outbound;
/** @internal */
export declare const EditRouteHasValue$outboundSchema: z.ZodType<EditRouteHasValue$Outbound, z.ZodTypeDef, EditRouteHasValue>;
export declare function editRouteHasValueToJSON(editRouteHasValue: EditRouteHasValue): string;
export declare function editRouteHasValueFromJSON(jsonString: string): SafeParseResult<EditRouteHasValue, SDKValidationError>;
/** @internal */
export declare const EditRouteHas1$inboundSchema: z.ZodType<EditRouteHas1, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteHas1$Outbound = {
    type: "host";
    value: string | EditRouteValue2$Outbound;
};
/** @internal */
export declare const EditRouteHas1$outboundSchema: z.ZodType<EditRouteHas1$Outbound, z.ZodTypeDef, EditRouteHas1>;
export declare function editRouteHas1ToJSON(editRouteHas1: EditRouteHas1): string;
export declare function editRouteHas1FromJSON(jsonString: string): SafeParseResult<EditRouteHas1, SDKValidationError>;
/** @internal */
export declare const EditRouteProjectRoutesHas$inboundSchema: z.ZodType<EditRouteProjectRoutesHas, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteProjectRoutesHas$Outbound = EditRouteHas1$Outbound | (EditRouteHas2$Outbound & {
    type: "header";
}) | (EditRouteHas2$Outbound & {
    type: "cookie";
}) | (EditRouteHas2$Outbound & {
    type: "query";
});
/** @internal */
export declare const EditRouteProjectRoutesHas$outboundSchema: z.ZodType<EditRouteProjectRoutesHas$Outbound, z.ZodTypeDef, EditRouteProjectRoutesHas>;
export declare function editRouteProjectRoutesHasToJSON(editRouteProjectRoutesHas: EditRouteProjectRoutesHas): string;
export declare function editRouteProjectRoutesHasFromJSON(jsonString: string): SafeParseResult<EditRouteProjectRoutesHas, SDKValidationError>;
/** @internal */
export declare const EditRouteMissingProjectRoutesType$inboundSchema: z.ZodNativeEnum<typeof EditRouteMissingProjectRoutesType>;
/** @internal */
export declare const EditRouteMissingProjectRoutesType$outboundSchema: z.ZodNativeEnum<typeof EditRouteMissingProjectRoutesType>;
/** @internal */
export declare const EditRouteValueProjectRoutesResponse200Eq$inboundSchema: z.ZodType<EditRouteValueProjectRoutesResponse200Eq, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteValueProjectRoutesResponse200Eq$Outbound = string | number;
/** @internal */
export declare const EditRouteValueProjectRoutesResponse200Eq$outboundSchema: z.ZodType<EditRouteValueProjectRoutesResponse200Eq$Outbound, z.ZodTypeDef, EditRouteValueProjectRoutesResponse200Eq>;
export declare function editRouteValueProjectRoutesResponse200EqToJSON(editRouteValueProjectRoutesResponse200Eq: EditRouteValueProjectRoutesResponse200Eq): string;
export declare function editRouteValueProjectRoutesResponse200EqFromJSON(jsonString: string): SafeParseResult<EditRouteValueProjectRoutesResponse200Eq, SDKValidationError>;
/** @internal */
export declare const EditRouteValueProjectRoutesResponse2002$inboundSchema: z.ZodType<EditRouteValueProjectRoutesResponse2002, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteValueProjectRoutesResponse2002$Outbound = {
    eq?: string | number | undefined;
    neq?: string | undefined;
    inc?: Array<string> | undefined;
    ninc?: Array<string> | undefined;
    pre?: string | undefined;
    suf?: string | undefined;
    re?: string | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
};
/** @internal */
export declare const EditRouteValueProjectRoutesResponse2002$outboundSchema: z.ZodType<EditRouteValueProjectRoutesResponse2002$Outbound, z.ZodTypeDef, EditRouteValueProjectRoutesResponse2002>;
export declare function editRouteValueProjectRoutesResponse2002ToJSON(editRouteValueProjectRoutesResponse2002: EditRouteValueProjectRoutesResponse2002): string;
export declare function editRouteValueProjectRoutesResponse2002FromJSON(jsonString: string): SafeParseResult<EditRouteValueProjectRoutesResponse2002, SDKValidationError>;
/** @internal */
export declare const EditRouteMissingProjectRoutesValue$inboundSchema: z.ZodType<EditRouteMissingProjectRoutesValue, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteMissingProjectRoutesValue$Outbound = string | EditRouteValueProjectRoutesResponse2002$Outbound;
/** @internal */
export declare const EditRouteMissingProjectRoutesValue$outboundSchema: z.ZodType<EditRouteMissingProjectRoutesValue$Outbound, z.ZodTypeDef, EditRouteMissingProjectRoutesValue>;
export declare function editRouteMissingProjectRoutesValueToJSON(editRouteMissingProjectRoutesValue: EditRouteMissingProjectRoutesValue): string;
export declare function editRouteMissingProjectRoutesValueFromJSON(jsonString: string): SafeParseResult<EditRouteMissingProjectRoutesValue, SDKValidationError>;
/** @internal */
export declare const EditRouteMissing2$inboundSchema: z.ZodType<EditRouteMissing2, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteMissing2$Outbound = {
    type: string;
    key: string;
    value?: string | EditRouteValueProjectRoutesResponse2002$Outbound | undefined;
};
/** @internal */
export declare const EditRouteMissing2$outboundSchema: z.ZodType<EditRouteMissing2$Outbound, z.ZodTypeDef, EditRouteMissing2>;
export declare function editRouteMissing2ToJSON(editRouteMissing2: EditRouteMissing2): string;
export declare function editRouteMissing2FromJSON(jsonString: string): SafeParseResult<EditRouteMissing2, SDKValidationError>;
/** @internal */
export declare const EditRouteValueProjectRoutesResponseEq$inboundSchema: z.ZodType<EditRouteValueProjectRoutesResponseEq, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteValueProjectRoutesResponseEq$Outbound = string | number;
/** @internal */
export declare const EditRouteValueProjectRoutesResponseEq$outboundSchema: z.ZodType<EditRouteValueProjectRoutesResponseEq$Outbound, z.ZodTypeDef, EditRouteValueProjectRoutesResponseEq>;
export declare function editRouteValueProjectRoutesResponseEqToJSON(editRouteValueProjectRoutesResponseEq: EditRouteValueProjectRoutesResponseEq): string;
export declare function editRouteValueProjectRoutesResponseEqFromJSON(jsonString: string): SafeParseResult<EditRouteValueProjectRoutesResponseEq, SDKValidationError>;
/** @internal */
export declare const EditRouteValueProjectRoutesResponse2$inboundSchema: z.ZodType<EditRouteValueProjectRoutesResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteValueProjectRoutesResponse2$Outbound = {
    eq?: string | number | undefined;
    neq?: string | undefined;
    inc?: Array<string> | undefined;
    ninc?: Array<string> | undefined;
    pre?: string | undefined;
    suf?: string | undefined;
    re?: string | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
};
/** @internal */
export declare const EditRouteValueProjectRoutesResponse2$outboundSchema: z.ZodType<EditRouteValueProjectRoutesResponse2$Outbound, z.ZodTypeDef, EditRouteValueProjectRoutesResponse2>;
export declare function editRouteValueProjectRoutesResponse2ToJSON(editRouteValueProjectRoutesResponse2: EditRouteValueProjectRoutesResponse2): string;
export declare function editRouteValueProjectRoutesResponse2FromJSON(jsonString: string): SafeParseResult<EditRouteValueProjectRoutesResponse2, SDKValidationError>;
/** @internal */
export declare const EditRouteMissingValue$inboundSchema: z.ZodType<EditRouteMissingValue, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteMissingValue$Outbound = string | EditRouteValueProjectRoutesResponse2$Outbound;
/** @internal */
export declare const EditRouteMissingValue$outboundSchema: z.ZodType<EditRouteMissingValue$Outbound, z.ZodTypeDef, EditRouteMissingValue>;
export declare function editRouteMissingValueToJSON(editRouteMissingValue: EditRouteMissingValue): string;
export declare function editRouteMissingValueFromJSON(jsonString: string): SafeParseResult<EditRouteMissingValue, SDKValidationError>;
/** @internal */
export declare const EditRouteMissing1$inboundSchema: z.ZodType<EditRouteMissing1, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteMissing1$Outbound = {
    type: "host";
    value: string | EditRouteValueProjectRoutesResponse2$Outbound;
};
/** @internal */
export declare const EditRouteMissing1$outboundSchema: z.ZodType<EditRouteMissing1$Outbound, z.ZodTypeDef, EditRouteMissing1>;
export declare function editRouteMissing1ToJSON(editRouteMissing1: EditRouteMissing1): string;
export declare function editRouteMissing1FromJSON(jsonString: string): SafeParseResult<EditRouteMissing1, SDKValidationError>;
/** @internal */
export declare const EditRouteProjectRoutesMissing$inboundSchema: z.ZodType<EditRouteProjectRoutesMissing, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteProjectRoutesMissing$Outbound = EditRouteMissing1$Outbound | (EditRouteMissing2$Outbound & {
    type: "header";
}) | (EditRouteMissing2$Outbound & {
    type: "cookie";
}) | (EditRouteMissing2$Outbound & {
    type: "query";
});
/** @internal */
export declare const EditRouteProjectRoutesMissing$outboundSchema: z.ZodType<EditRouteProjectRoutesMissing$Outbound, z.ZodTypeDef, EditRouteProjectRoutesMissing>;
export declare function editRouteProjectRoutesMissingToJSON(editRouteProjectRoutesMissing: EditRouteProjectRoutesMissing): string;
export declare function editRouteProjectRoutesMissingFromJSON(jsonString: string): SafeParseResult<EditRouteProjectRoutesMissing, SDKValidationError>;
/** @internal */
export declare const EditRouteAction$inboundSchema: z.ZodNativeEnum<typeof EditRouteAction>;
/** @internal */
export declare const EditRouteAction$outboundSchema: z.ZodNativeEnum<typeof EditRouteAction>;
/** @internal */
export declare const EditRouteMitigate$inboundSchema: z.ZodType<EditRouteMitigate, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteMitigate$Outbound = {
    action: string;
};
/** @internal */
export declare const EditRouteMitigate$outboundSchema: z.ZodType<EditRouteMitigate$Outbound, z.ZodTypeDef, EditRouteMitigate>;
export declare function editRouteMitigateToJSON(editRouteMitigate: EditRouteMitigate): string;
export declare function editRouteMitigateFromJSON(jsonString: string): SafeParseResult<EditRouteMitigate, SDKValidationError>;
/** @internal */
export declare const EditRouteProjectRoutesResponseType$inboundSchema: z.ZodNativeEnum<typeof EditRouteProjectRoutesResponseType>;
/** @internal */
export declare const EditRouteProjectRoutesResponseType$outboundSchema: z.ZodNativeEnum<typeof EditRouteProjectRoutesResponseType>;
/** @internal */
export declare const EditRouteProjectRoutesOp$inboundSchema: z.ZodNativeEnum<typeof EditRouteProjectRoutesOp>;
/** @internal */
export declare const EditRouteProjectRoutesOp$outboundSchema: z.ZodNativeEnum<typeof EditRouteProjectRoutesOp>;
/** @internal */
export declare const EditRouteKeyEq$inboundSchema: z.ZodType<EditRouteKeyEq, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteKeyEq$Outbound = string | number;
/** @internal */
export declare const EditRouteKeyEq$outboundSchema: z.ZodType<EditRouteKeyEq$Outbound, z.ZodTypeDef, EditRouteKeyEq>;
export declare function editRouteKeyEqToJSON(editRouteKeyEq: EditRouteKeyEq): string;
export declare function editRouteKeyEqFromJSON(jsonString: string): SafeParseResult<EditRouteKeyEq, SDKValidationError>;
/** @internal */
export declare const EditRouteKey2$inboundSchema: z.ZodType<EditRouteKey2, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteKey2$Outbound = {
    eq?: string | number | undefined;
    neq?: string | undefined;
    inc?: Array<string> | undefined;
    ninc?: Array<string> | undefined;
    pre?: string | undefined;
    suf?: string | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
};
/** @internal */
export declare const EditRouteKey2$outboundSchema: z.ZodType<EditRouteKey2$Outbound, z.ZodTypeDef, EditRouteKey2>;
export declare function editRouteKey2ToJSON(editRouteKey2: EditRouteKey2): string;
export declare function editRouteKey2FromJSON(jsonString: string): SafeParseResult<EditRouteKey2, SDKValidationError>;
/** @internal */
export declare const EditRouteKey$inboundSchema: z.ZodType<EditRouteKey, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteKey$Outbound = string | EditRouteKey2$Outbound;
/** @internal */
export declare const EditRouteKey$outboundSchema: z.ZodType<EditRouteKey$Outbound, z.ZodTypeDef, EditRouteKey>;
export declare function editRouteKeyToJSON(editRouteKey: EditRouteKey): string;
export declare function editRouteKeyFromJSON(jsonString: string): SafeParseResult<EditRouteKey, SDKValidationError>;
/** @internal */
export declare const EditRouteProjectRoutesTarget$inboundSchema: z.ZodType<EditRouteProjectRoutesTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteProjectRoutesTarget$Outbound = {
    key: string | EditRouteKey2$Outbound;
};
/** @internal */
export declare const EditRouteProjectRoutesTarget$outboundSchema: z.ZodType<EditRouteProjectRoutesTarget$Outbound, z.ZodTypeDef, EditRouteProjectRoutesTarget>;
export declare function editRouteProjectRoutesTargetToJSON(editRouteProjectRoutesTarget: EditRouteProjectRoutesTarget): string;
export declare function editRouteProjectRoutesTargetFromJSON(jsonString: string): SafeParseResult<EditRouteProjectRoutesTarget, SDKValidationError>;
/** @internal */
export declare const EditRouteArgs$inboundSchema: z.ZodType<EditRouteArgs, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteArgs$Outbound = string | Array<string>;
/** @internal */
export declare const EditRouteArgs$outboundSchema: z.ZodType<EditRouteArgs$Outbound, z.ZodTypeDef, EditRouteArgs>;
export declare function editRouteArgsToJSON(editRouteArgs: EditRouteArgs): string;
export declare function editRouteArgsFromJSON(jsonString: string): SafeParseResult<EditRouteArgs, SDKValidationError>;
/** @internal */
export declare const EditRouteProjectRoutesTransforms$inboundSchema: z.ZodType<EditRouteProjectRoutesTransforms, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteProjectRoutesTransforms$Outbound = {
    type: string;
    op: string;
    target: EditRouteProjectRoutesTarget$Outbound;
    args?: string | Array<string> | undefined;
    env?: Array<string> | undefined;
};
/** @internal */
export declare const EditRouteProjectRoutesTransforms$outboundSchema: z.ZodType<EditRouteProjectRoutesTransforms$Outbound, z.ZodTypeDef, EditRouteProjectRoutesTransforms>;
export declare function editRouteProjectRoutesTransformsToJSON(editRouteProjectRoutesTransforms: EditRouteProjectRoutesTransforms): string;
export declare function editRouteProjectRoutesTransformsFromJSON(jsonString: string): SafeParseResult<EditRouteProjectRoutesTransforms, SDKValidationError>;
/** @internal */
export declare const EditRouteLocale$inboundSchema: z.ZodType<EditRouteLocale, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteLocale$Outbound = {
    redirect?: {
        [k: string]: string;
    } | undefined;
    cookie?: string | undefined;
};
/** @internal */
export declare const EditRouteLocale$outboundSchema: z.ZodType<EditRouteLocale$Outbound, z.ZodTypeDef, EditRouteLocale>;
export declare function editRouteLocaleToJSON(editRouteLocale: EditRouteLocale): string;
export declare function editRouteLocaleFromJSON(jsonString: string): SafeParseResult<EditRouteLocale, SDKValidationError>;
/** @internal */
export declare const EditRouteProjectRoutesResponse200Route$inboundSchema: z.ZodType<EditRouteProjectRoutesResponse200Route, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteProjectRoutesResponse200Route$Outbound = {
    src: string;
    dest?: string | undefined;
    headers?: {
        [k: string]: string;
    } | undefined;
    methods?: Array<string> | undefined;
    continue?: boolean | undefined;
    override?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    check?: boolean | undefined;
    important?: boolean | undefined;
    status?: number | undefined;
    has?: Array<EditRouteHas1$Outbound | (EditRouteHas2$Outbound & {
        type: "header";
    }) | (EditRouteHas2$Outbound & {
        type: "cookie";
    }) | (EditRouteHas2$Outbound & {
        type: "query";
    })> | undefined;
    missing?: Array<EditRouteMissing1$Outbound | (EditRouteMissing2$Outbound & {
        type: "header";
    }) | (EditRouteMissing2$Outbound & {
        type: "cookie";
    }) | (EditRouteMissing2$Outbound & {
        type: "query";
    })> | undefined;
    mitigate?: EditRouteMitigate$Outbound | undefined;
    transforms?: Array<EditRouteProjectRoutesTransforms$Outbound> | undefined;
    env?: Array<string> | undefined;
    locale?: EditRouteLocale$Outbound | undefined;
    source?: string | undefined;
    destination?: string | undefined;
    statusCode?: number | undefined;
    middlewarePath?: string | undefined;
    middlewareRawSrc?: Array<string> | undefined;
    middleware?: number | undefined;
    respectOriginCacheControl?: boolean | undefined;
};
/** @internal */
export declare const EditRouteProjectRoutesResponse200Route$outboundSchema: z.ZodType<EditRouteProjectRoutesResponse200Route$Outbound, z.ZodTypeDef, EditRouteProjectRoutesResponse200Route>;
export declare function editRouteProjectRoutesResponse200RouteToJSON(editRouteProjectRoutesResponse200Route: EditRouteProjectRoutesResponse200Route): string;
export declare function editRouteProjectRoutesResponse200RouteFromJSON(jsonString: string): SafeParseResult<EditRouteProjectRoutesResponse200Route, SDKValidationError>;
/** @internal */
export declare const EditRouteProjectRoutesSrcSyntax$inboundSchema: z.ZodNativeEnum<typeof EditRouteProjectRoutesSrcSyntax>;
/** @internal */
export declare const EditRouteProjectRoutesSrcSyntax$outboundSchema: z.ZodNativeEnum<typeof EditRouteProjectRoutesSrcSyntax>;
/** @internal */
export declare const EditRouteProjectRoutesResponseRoute$inboundSchema: z.ZodType<EditRouteProjectRoutesResponseRoute, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteProjectRoutesResponseRoute$Outbound = {
    routeType?: string | undefined;
    id: string;
    name: string;
    description?: string | undefined;
    enabled?: boolean | undefined;
    staged?: boolean | undefined;
    route: EditRouteProjectRoutesResponse200Route$Outbound;
    rawSrc?: string | undefined;
    rawDest?: string | undefined;
    srcSyntax?: string | undefined;
};
/** @internal */
export declare const EditRouteProjectRoutesResponseRoute$outboundSchema: z.ZodType<EditRouteProjectRoutesResponseRoute$Outbound, z.ZodTypeDef, EditRouteProjectRoutesResponseRoute>;
export declare function editRouteProjectRoutesResponseRouteToJSON(editRouteProjectRoutesResponseRoute: EditRouteProjectRoutesResponseRoute): string;
export declare function editRouteProjectRoutesResponseRouteFromJSON(jsonString: string): SafeParseResult<EditRouteProjectRoutesResponseRoute, SDKValidationError>;
/** @internal */
export declare const EditRouteVersion$inboundSchema: z.ZodType<EditRouteVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteVersion$Outbound = {
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
export declare const EditRouteVersion$outboundSchema: z.ZodType<EditRouteVersion$Outbound, z.ZodTypeDef, EditRouteVersion>;
export declare function editRouteVersionToJSON(editRouteVersion: EditRouteVersion): string;
export declare function editRouteVersionFromJSON(jsonString: string): SafeParseResult<EditRouteVersion, SDKValidationError>;
/** @internal */
export declare const EditRouteResponseBody$inboundSchema: z.ZodType<EditRouteResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRouteResponseBody$Outbound = {
    route?: EditRouteProjectRoutesResponseRoute$Outbound | undefined;
    version: EditRouteVersion$Outbound;
};
/** @internal */
export declare const EditRouteResponseBody$outboundSchema: z.ZodType<EditRouteResponseBody$Outbound, z.ZodTypeDef, EditRouteResponseBody>;
export declare function editRouteResponseBodyToJSON(editRouteResponseBody: EditRouteResponseBody): string;
export declare function editRouteResponseBodyFromJSON(jsonString: string): SafeParseResult<EditRouteResponseBody, SDKValidationError>;
//# sourceMappingURL=editrouteop.d.ts.map