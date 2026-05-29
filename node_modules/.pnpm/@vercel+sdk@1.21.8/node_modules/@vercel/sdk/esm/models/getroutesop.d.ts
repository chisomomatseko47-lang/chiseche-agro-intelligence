import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const QueryParamFilter: {
    readonly Rewrite: "rewrite";
    readonly Redirect: "redirect";
    readonly SetStatus: "set_status";
    readonly Transform: "transform";
};
export type QueryParamFilter = ClosedEnum<typeof QueryParamFilter>;
export declare const DiffQueryParam2: {
    readonly Only: "only";
};
export type DiffQueryParam2 = ClosedEnum<typeof DiffQueryParam2>;
export type QueryParamDiff = boolean | DiffQueryParam2;
export type GetRoutesRequest = {
    projectId: string;
    versionId?: string | undefined;
    q?: string | undefined;
    filter?: QueryParamFilter | undefined;
    diff?: boolean | DiffQueryParam2 | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyType: {
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyType = ClosedEnum<typeof GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyType>;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEq = string | number;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2 = {
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
export type GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValue = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2;
export type GetRoutesHasProjectRoutesResponse2 = {
    type: GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyType;
    key: string;
    value?: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2 | undefined;
};
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Eq = string | number;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42 = {
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
export type GetRoutesHasProjectRoutesResponse200ApplicationJSONValue = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42;
export type GetRoutesHasProjectRoutesResponse1 = {
    type: "host";
    value: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42;
};
export type GetRoutesResponseBodyProjectRoutesHas = GetRoutesHasProjectRoutesResponse1 | (GetRoutesHasProjectRoutesResponse2 & {
    type: "header";
}) | (GetRoutesHasProjectRoutesResponse2 & {
    type: "cookie";
}) | (GetRoutesHasProjectRoutesResponse2 & {
    type: "query";
});
export declare const GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyType: {
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyType = ClosedEnum<typeof GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyType>;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEq = string | number;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2 = {
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
export type GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValue = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2;
export type GetRoutesMissingProjectRoutesResponse2 = {
    type: GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyType;
    key: string;
    value?: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2 | undefined;
};
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEq = string | number;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2 = {
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
export type GetRoutesMissingProjectRoutesResponse200ApplicationJSONValue = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2;
export type GetRoutesMissingProjectRoutesResponse1 = {
    type: "host";
    value: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2;
};
export type GetRoutesResponseBodyProjectRoutesMissing = GetRoutesMissingProjectRoutesResponse1 | (GetRoutesMissingProjectRoutesResponse2 & {
    type: "header";
}) | (GetRoutesMissingProjectRoutesResponse2 & {
    type: "cookie";
}) | (GetRoutesMissingProjectRoutesResponse2 & {
    type: "query";
});
export declare const GetRoutesResponseBodyProjectRoutesAction: {
    readonly Challenge: "challenge";
    readonly Deny: "deny";
};
export type GetRoutesResponseBodyProjectRoutesAction = ClosedEnum<typeof GetRoutesResponseBodyProjectRoutesAction>;
export type GetRoutesResponseBodyProjectRoutesMitigate = {
    action: GetRoutesResponseBodyProjectRoutesAction;
};
export declare const GetRoutesResponseBodyProjectRoutesResponseType: {
    readonly RequestHeaders: "request.headers";
    readonly RequestQuery: "request.query";
    readonly ResponseHeaders: "response.headers";
};
export type GetRoutesResponseBodyProjectRoutesResponseType = ClosedEnum<typeof GetRoutesResponseBodyProjectRoutesResponseType>;
export declare const GetRoutesResponseBodyProjectRoutesOp: {
    readonly Append: "append";
    readonly Set: "set";
    readonly Delete: "delete";
};
export type GetRoutesResponseBodyProjectRoutesOp = ClosedEnum<typeof GetRoutesResponseBodyProjectRoutesOp>;
export type GetRoutesKeyProjectRoutesResponseEq = string | number;
export type GetRoutesKeyProjectRoutesResponse2 = {
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
export type GetRoutesResponseBodyProjectRoutesKey = string | GetRoutesKeyProjectRoutesResponse2;
export type GetRoutesResponseBodyProjectRoutesResponseTarget = {
    key: string | GetRoutesKeyProjectRoutesResponse2;
};
export type GetRoutesResponseBodyProjectRoutesArgs = string | Array<string>;
export type GetRoutesResponseBodyProjectRoutesTransforms = {
    type: GetRoutesResponseBodyProjectRoutesResponseType;
    op: GetRoutesResponseBodyProjectRoutesOp;
    target: GetRoutesResponseBodyProjectRoutesResponseTarget;
    args?: string | Array<string> | undefined;
    env?: Array<string> | undefined;
};
export type GetRoutesResponseBodyProjectRoutesLocale = {
    redirect?: {
        [k: string]: string;
    } | undefined;
    cookie?: string | undefined;
};
/**
 * The route definition from @vercel/routing-utils.
 */
export type GetRoutesResponseBodyRoute = {
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
    has?: Array<GetRoutesHasProjectRoutesResponse1 | (GetRoutesHasProjectRoutesResponse2 & {
        type: "header";
    }) | (GetRoutesHasProjectRoutesResponse2 & {
        type: "cookie";
    }) | (GetRoutesHasProjectRoutesResponse2 & {
        type: "query";
    })> | undefined;
    missing?: Array<GetRoutesMissingProjectRoutesResponse1 | (GetRoutesMissingProjectRoutesResponse2 & {
        type: "header";
    }) | (GetRoutesMissingProjectRoutesResponse2 & {
        type: "cookie";
    }) | (GetRoutesMissingProjectRoutesResponse2 & {
        type: "query";
    })> | undefined;
    mitigate?: GetRoutesResponseBodyProjectRoutesMitigate | undefined;
    transforms?: Array<GetRoutesResponseBodyProjectRoutesTransforms> | undefined;
    env?: Array<string> | undefined;
    locale?: GetRoutesResponseBodyProjectRoutesLocale | undefined;
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
export declare const GetRoutesResponseBodySrcSyntax: {
    readonly Equals: "equals";
    readonly PathToRegexp: "path-to-regexp";
    readonly Regex: "regex";
};
/**
 * The syntax type of the source pattern. Determines how the pattern is compiled to regex.
 */
export type GetRoutesResponseBodySrcSyntax = ClosedEnum<typeof GetRoutesResponseBodySrcSyntax>;
/**
 * Computed route type based on the route configuration. Only present in API responses, not stored in S3.
 */
export declare const GetRoutesResponseBodyRouteType: {
    readonly Rewrite: "rewrite";
    readonly Redirect: "redirect";
    readonly SetStatus: "set_status";
    readonly Transform: "transform";
};
/**
 * Computed route type based on the route configuration. Only present in API responses, not stored in S3.
 */
export type GetRoutesResponseBodyRouteType = ClosedEnum<typeof GetRoutesResponseBodyRouteType>;
/**
 * A routing rule with metadata for project-level routing.
 */
export type GetRoutesResponseBodyProjectRoutesResponseRoutes = {
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
    route: GetRoutesResponseBodyRoute;
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
    srcSyntax?: GetRoutesResponseBodySrcSyntax | undefined;
    /**
     * Computed route type based on the route configuration. Only present in API responses, not stored in S3.
     */
    routeType?: GetRoutesResponseBodyRouteType | undefined;
};
/**
 * A version of routing rules stored in S3.
 */
export type GetRoutesResponseBodyProjectRoutesResponseVersion = {
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
export type ResponseBodyLimit = {
    maxRoutes: number;
    currentRoutes: number;
};
export type ResponseBody4 = {
    routes: Array<GetRoutesResponseBodyProjectRoutesResponseRoutes>;
    /**
     * A version of routing rules stored in S3.
     */
    version: GetRoutesResponseBodyProjectRoutesResponseVersion;
    limit: ResponseBodyLimit;
};
export declare const GetRoutesHasProjectRoutesResponse200Type: {
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type GetRoutesHasProjectRoutesResponse200Type = ClosedEnum<typeof GetRoutesHasProjectRoutesResponse200Type>;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEq = string | number;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2 = {
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
export type GetRoutesHasProjectRoutesResponse200Value = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2;
export type GetRoutesHasProjectRoutes2 = {
    type: GetRoutesHasProjectRoutesResponse200Type;
    key: string;
    value?: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2 | undefined;
};
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONEq = string | number;
export type GetRoutesValueProjectRoutesResponse200ApplicationJson2 = {
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
export type GetRoutesHasProjectRoutesResponseValue = string | GetRoutesValueProjectRoutesResponse200ApplicationJson2;
export type GetRoutesHasProjectRoutes1 = {
    type: "host";
    value: string | GetRoutesValueProjectRoutesResponse200ApplicationJson2;
};
export type GetRoutesResponseBodyHas = GetRoutesHasProjectRoutes1 | (GetRoutesHasProjectRoutes2 & {
    type: "header";
}) | (GetRoutesHasProjectRoutes2 & {
    type: "cookie";
}) | (GetRoutesHasProjectRoutes2 & {
    type: "query";
});
export declare const GetRoutesMissingProjectRoutesResponse200Type: {
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type GetRoutesMissingProjectRoutesResponse200Type = ClosedEnum<typeof GetRoutesMissingProjectRoutesResponse200Type>;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEq = string | number;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2 = {
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
export type GetRoutesMissingProjectRoutesResponse200Value = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2;
export type GetRoutesMissingProjectRoutes2 = {
    type: GetRoutesMissingProjectRoutesResponse200Type;
    key: string;
    value?: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2 | undefined;
};
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Eq = string | number;
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32 = {
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
export type GetRoutesMissingProjectRoutesResponseValue = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32;
export type GetRoutesMissingProjectRoutes1 = {
    type: "host";
    value: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32;
};
export type GetRoutesResponseBodyMissing = GetRoutesMissingProjectRoutes1 | (GetRoutesMissingProjectRoutes2 & {
    type: "header";
}) | (GetRoutesMissingProjectRoutes2 & {
    type: "cookie";
}) | (GetRoutesMissingProjectRoutes2 & {
    type: "query";
});
export declare const GetRoutesResponseBodyAction: {
    readonly Challenge: "challenge";
    readonly Deny: "deny";
};
export type GetRoutesResponseBodyAction = ClosedEnum<typeof GetRoutesResponseBodyAction>;
export type GetRoutesResponseBodyMitigate = {
    action: GetRoutesResponseBodyAction;
};
export declare const GetRoutesResponseBodyProjectRoutesType: {
    readonly RequestHeaders: "request.headers";
    readonly RequestQuery: "request.query";
    readonly ResponseHeaders: "response.headers";
};
export type GetRoutesResponseBodyProjectRoutesType = ClosedEnum<typeof GetRoutesResponseBodyProjectRoutesType>;
export declare const GetRoutesResponseBodyOp: {
    readonly Append: "append";
    readonly Set: "set";
    readonly Delete: "delete";
};
export type GetRoutesResponseBodyOp = ClosedEnum<typeof GetRoutesResponseBodyOp>;
export type GetRoutesKeyProjectRoutesEq = string | number;
export type GetRoutesKeyProjectRoutes2 = {
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
export type GetRoutesResponseBodyKey = string | GetRoutesKeyProjectRoutes2;
export type GetRoutesResponseBodyProjectRoutesTarget = {
    key: string | GetRoutesKeyProjectRoutes2;
};
export type GetRoutesResponseBodyArgs = string | Array<string>;
export type GetRoutesResponseBodyTransforms = {
    type: GetRoutesResponseBodyProjectRoutesType;
    op: GetRoutesResponseBodyOp;
    target: GetRoutesResponseBodyProjectRoutesTarget;
    args?: string | Array<string> | undefined;
    env?: Array<string> | undefined;
};
export type GetRoutesResponseBodyLocale = {
    redirect?: {
        [k: string]: string;
    } | undefined;
    cookie?: string | undefined;
};
/**
 * The route definition from @vercel/routing-utils.
 */
export type ResponseBodyRoute = {
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
    has?: Array<GetRoutesHasProjectRoutes1 | (GetRoutesHasProjectRoutes2 & {
        type: "header";
    }) | (GetRoutesHasProjectRoutes2 & {
        type: "cookie";
    }) | (GetRoutesHasProjectRoutes2 & {
        type: "query";
    })> | undefined;
    missing?: Array<GetRoutesMissingProjectRoutes1 | (GetRoutesMissingProjectRoutes2 & {
        type: "header";
    }) | (GetRoutesMissingProjectRoutes2 & {
        type: "cookie";
    }) | (GetRoutesMissingProjectRoutes2 & {
        type: "query";
    })> | undefined;
    mitigate?: GetRoutesResponseBodyMitigate | undefined;
    transforms?: Array<GetRoutesResponseBodyTransforms> | undefined;
    env?: Array<string> | undefined;
    locale?: GetRoutesResponseBodyLocale | undefined;
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
export declare const ResponseBodySrcSyntax: {
    readonly Equals: "equals";
    readonly PathToRegexp: "path-to-regexp";
    readonly Regex: "regex";
};
/**
 * The syntax type of the source pattern. Determines how the pattern is compiled to regex.
 */
export type ResponseBodySrcSyntax = ClosedEnum<typeof ResponseBodySrcSyntax>;
/**
 * Computed route type based on the route configuration. Only present in API responses, not stored in S3.
 */
export declare const ResponseBodyRouteType: {
    readonly Rewrite: "rewrite";
    readonly Redirect: "redirect";
    readonly SetStatus: "set_status";
    readonly Transform: "transform";
};
/**
 * Computed route type based on the route configuration. Only present in API responses, not stored in S3.
 */
export type ResponseBodyRouteType = ClosedEnum<typeof ResponseBodyRouteType>;
/**
 * A routing rule with metadata for project-level routing.
 */
export type GetRoutesResponseBodyProjectRoutesRoutes = {
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
    route: ResponseBodyRoute;
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
    srcSyntax?: ResponseBodySrcSyntax | undefined;
    /**
     * Computed route type based on the route configuration. Only present in API responses, not stored in S3.
     */
    routeType?: ResponseBodyRouteType | undefined;
};
/**
 * A version of routing rules stored in S3.
 */
export type GetRoutesResponseBodyProjectRoutesVersion = {
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
export type GetRoutesResponseBody3 = {
    routes: Array<GetRoutesResponseBodyProjectRoutesRoutes>;
    /**
     * A version of routing rules stored in S3.
     */
    version: GetRoutesResponseBodyProjectRoutesVersion;
};
export declare const GetRoutesHasProjectRoutesType: {
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type GetRoutesHasProjectRoutesType = ClosedEnum<typeof GetRoutesHasProjectRoutesType>;
export type GetRoutesValueProjectRoutesEq = string | number;
export type GetRoutesValueProjectRoutes2 = {
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
export type GetRoutesHasProjectRoutesValue = string | GetRoutesValueProjectRoutes2;
export type GetRoutesHas2 = {
    type: GetRoutesHasProjectRoutesType;
    key: string;
    value?: string | GetRoutesValueProjectRoutes2 | undefined;
};
export type GetRoutesValueEq = string | number;
export type GetRoutesValue2 = {
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
export type GetRoutesHasValue = string | GetRoutesValue2;
export type GetRoutesHas1 = {
    type: "host";
    value: string | GetRoutesValue2;
};
export type ResponseBodyHas = GetRoutesHas1 | (GetRoutesHas2 & {
    type: "header";
}) | (GetRoutesHas2 & {
    type: "cookie";
}) | (GetRoutesHas2 & {
    type: "query";
});
export declare const GetRoutesMissingProjectRoutesType: {
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type GetRoutesMissingProjectRoutesType = ClosedEnum<typeof GetRoutesMissingProjectRoutesType>;
export type GetRoutesValueProjectRoutesResponse200Eq = string | number;
export type GetRoutesValueProjectRoutesResponse2002 = {
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
export type GetRoutesMissingProjectRoutesValue = string | GetRoutesValueProjectRoutesResponse2002;
export type GetRoutesMissing2 = {
    type: GetRoutesMissingProjectRoutesType;
    key: string;
    value?: string | GetRoutesValueProjectRoutesResponse2002 | undefined;
};
export type GetRoutesValueProjectRoutesResponseEq = string | number;
export type GetRoutesValueProjectRoutesResponse2 = {
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
export type GetRoutesMissingValue = string | GetRoutesValueProjectRoutesResponse2;
export type GetRoutesMissing1 = {
    type: "host";
    value: string | GetRoutesValueProjectRoutesResponse2;
};
export type ResponseBodyMissing = GetRoutesMissing1 | (GetRoutesMissing2 & {
    type: "header";
}) | (GetRoutesMissing2 & {
    type: "cookie";
}) | (GetRoutesMissing2 & {
    type: "query";
});
export declare const GetRoutesResponseBodyProjectRoutesResponseAction: {
    readonly Challenge: "challenge";
    readonly Deny: "deny";
};
export type GetRoutesResponseBodyProjectRoutesResponseAction = ClosedEnum<typeof GetRoutesResponseBodyProjectRoutesResponseAction>;
export type ResponseBodyMitigate = {
    action: GetRoutesResponseBodyProjectRoutesResponseAction;
};
export declare const GetRoutesResponseBodyType: {
    readonly RequestHeaders: "request.headers";
    readonly RequestQuery: "request.query";
    readonly ResponseHeaders: "response.headers";
};
export type GetRoutesResponseBodyType = ClosedEnum<typeof GetRoutesResponseBodyType>;
export declare const ResponseBodyOp: {
    readonly Append: "append";
    readonly Set: "set";
    readonly Delete: "delete";
};
export type ResponseBodyOp = ClosedEnum<typeof ResponseBodyOp>;
export type GetRoutesKeyEq = string | number;
export type GetRoutesKey2 = {
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
export type ResponseBodyKey = string | GetRoutesKey2;
export type GetRoutesResponseBodyTarget = {
    key: string | GetRoutesKey2;
};
export type ResponseBodyArgs = string | Array<string>;
export type ResponseBodyTransforms = {
    type: GetRoutesResponseBodyType;
    op: ResponseBodyOp;
    target: GetRoutesResponseBodyTarget;
    args?: string | Array<string> | undefined;
    env?: Array<string> | undefined;
};
export type ResponseBodyLocale = {
    redirect?: {
        [k: string]: string;
    } | undefined;
    cookie?: string | undefined;
};
/**
 * The route definition from @vercel/routing-utils.
 */
export type GetRoutesResponseBodyProjectRoutesRoute = {
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
    has?: Array<GetRoutesHas1 | (GetRoutesHas2 & {
        type: "header";
    }) | (GetRoutesHas2 & {
        type: "cookie";
    }) | (GetRoutesHas2 & {
        type: "query";
    })> | undefined;
    missing?: Array<GetRoutesMissing1 | (GetRoutesMissing2 & {
        type: "header";
    }) | (GetRoutesMissing2 & {
        type: "cookie";
    }) | (GetRoutesMissing2 & {
        type: "query";
    })> | undefined;
    mitigate?: ResponseBodyMitigate | undefined;
    transforms?: Array<ResponseBodyTransforms> | undefined;
    env?: Array<string> | undefined;
    locale?: ResponseBodyLocale | undefined;
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
export declare const GetRoutesResponseBodyProjectRoutesSrcSyntax: {
    readonly Equals: "equals";
    readonly PathToRegexp: "path-to-regexp";
    readonly Regex: "regex";
};
/**
 * The syntax type of the source pattern. Determines how the pattern is compiled to regex.
 */
export type GetRoutesResponseBodyProjectRoutesSrcSyntax = ClosedEnum<typeof GetRoutesResponseBodyProjectRoutesSrcSyntax>;
/**
 * Computed route type based on the route configuration. Only present in API responses, not stored in S3.
 */
export declare const GetRoutesResponseBodyProjectRoutesRouteType: {
    readonly Rewrite: "rewrite";
    readonly Redirect: "redirect";
    readonly SetStatus: "set_status";
    readonly Transform: "transform";
};
/**
 * Computed route type based on the route configuration. Only present in API responses, not stored in S3.
 */
export type GetRoutesResponseBodyProjectRoutesRouteType = ClosedEnum<typeof GetRoutesResponseBodyProjectRoutesRouteType>;
/**
 * A routing rule with metadata for project-level routing.
 */
export type GetRoutesResponseBodyRoutes = {
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
    route: GetRoutesResponseBodyProjectRoutesRoute;
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
    srcSyntax?: GetRoutesResponseBodyProjectRoutesSrcSyntax | undefined;
    /**
     * Computed route type based on the route configuration. Only present in API responses, not stored in S3.
     */
    routeType?: GetRoutesResponseBodyProjectRoutesRouteType | undefined;
};
/**
 * A version of routing rules stored in S3.
 */
export type GetRoutesResponseBodyVersion = {
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
export type GetRoutesResponseBody2 = {
    routes: Array<GetRoutesResponseBodyRoutes>;
    /**
     * A version of routing rules stored in S3.
     */
    version: GetRoutesResponseBodyVersion;
    diffCount: number;
};
export type GetRoutesResponseBody1 = {};
export type GetRoutesResponseBody = GetRoutesResponseBody2 | ResponseBody4 | GetRoutesResponseBody3 | GetRoutesResponseBody1;
/** @internal */
export declare const QueryParamFilter$inboundSchema: z.ZodNativeEnum<typeof QueryParamFilter>;
/** @internal */
export declare const QueryParamFilter$outboundSchema: z.ZodNativeEnum<typeof QueryParamFilter>;
/** @internal */
export declare const DiffQueryParam2$inboundSchema: z.ZodNativeEnum<typeof DiffQueryParam2>;
/** @internal */
export declare const DiffQueryParam2$outboundSchema: z.ZodNativeEnum<typeof DiffQueryParam2>;
/** @internal */
export declare const QueryParamDiff$inboundSchema: z.ZodType<QueryParamDiff, z.ZodTypeDef, unknown>;
/** @internal */
export type QueryParamDiff$Outbound = boolean | string;
/** @internal */
export declare const QueryParamDiff$outboundSchema: z.ZodType<QueryParamDiff$Outbound, z.ZodTypeDef, QueryParamDiff>;
export declare function queryParamDiffToJSON(queryParamDiff: QueryParamDiff): string;
export declare function queryParamDiffFromJSON(jsonString: string): SafeParseResult<QueryParamDiff, SDKValidationError>;
/** @internal */
export declare const GetRoutesRequest$inboundSchema: z.ZodType<GetRoutesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesRequest$Outbound = {
    projectId: string;
    versionId?: string | undefined;
    q?: string | undefined;
    filter?: string | undefined;
    diff?: boolean | string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetRoutesRequest$outboundSchema: z.ZodType<GetRoutesRequest$Outbound, z.ZodTypeDef, GetRoutesRequest>;
export declare function getRoutesRequestToJSON(getRoutesRequest: GetRoutesRequest): string;
export declare function getRoutesRequestFromJSON(jsonString: string): SafeParseResult<GetRoutesRequest, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyType>;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyType>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEq>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEqToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEq: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEq): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2$Outbound = {
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
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2ToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValue$inboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValue$Outbound = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2$Outbound;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValue$outboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValue$Outbound, z.ZodTypeDef, GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValue>;
export declare function getRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValueToJSON(getRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValue: GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValue): string;
export declare function getRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValueFromJSON(jsonString: string): SafeParseResult<GetRoutesHasProjectRoutesResponse200ApplicationJSONResponseBodyValue, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse2$inboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHasProjectRoutesResponse2$Outbound = {
    type: string;
    key: string;
    value?: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Routes2$Outbound | undefined;
};
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse2$outboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponse2$Outbound, z.ZodTypeDef, GetRoutesHasProjectRoutesResponse2>;
export declare function getRoutesHasProjectRoutesResponse2ToJSON(getRoutesHasProjectRoutesResponse2: GetRoutesHasProjectRoutesResponse2): string;
export declare function getRoutesHasProjectRoutesResponse2FromJSON(jsonString: string): SafeParseResult<GetRoutesHasProjectRoutesResponse2, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Eq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Eq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Eq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Eq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Eq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Eq>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4EqToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Eq: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Eq): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4EqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4Eq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42$Outbound = {
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
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42ToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse200ApplicationJSONValue$inboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponse200ApplicationJSONValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHasProjectRoutesResponse200ApplicationJSONValue$Outbound = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42$Outbound;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse200ApplicationJSONValue$outboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponse200ApplicationJSONValue$Outbound, z.ZodTypeDef, GetRoutesHasProjectRoutesResponse200ApplicationJSONValue>;
export declare function getRoutesHasProjectRoutesResponse200ApplicationJSONValueToJSON(getRoutesHasProjectRoutesResponse200ApplicationJSONValue: GetRoutesHasProjectRoutesResponse200ApplicationJSONValue): string;
export declare function getRoutesHasProjectRoutesResponse200ApplicationJSONValueFromJSON(jsonString: string): SafeParseResult<GetRoutesHasProjectRoutesResponse200ApplicationJSONValue, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse1$inboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHasProjectRoutesResponse1$Outbound = {
    type: "host";
    value: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody42$Outbound;
};
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse1$outboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponse1$Outbound, z.ZodTypeDef, GetRoutesHasProjectRoutesResponse1>;
export declare function getRoutesHasProjectRoutesResponse1ToJSON(getRoutesHasProjectRoutesResponse1: GetRoutesHasProjectRoutesResponse1): string;
export declare function getRoutesHasProjectRoutesResponse1FromJSON(jsonString: string): SafeParseResult<GetRoutesHasProjectRoutesResponse1, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesHas$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesHas, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesHas$Outbound = GetRoutesHasProjectRoutesResponse1$Outbound | (GetRoutesHasProjectRoutesResponse2$Outbound & {
    type: "header";
}) | (GetRoutesHasProjectRoutesResponse2$Outbound & {
    type: "cookie";
}) | (GetRoutesHasProjectRoutesResponse2$Outbound & {
    type: "query";
});
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesHas$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesHas$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesHas>;
export declare function getRoutesResponseBodyProjectRoutesHasToJSON(getRoutesResponseBodyProjectRoutesHas: GetRoutesResponseBodyProjectRoutesHas): string;
export declare function getRoutesResponseBodyProjectRoutesHasFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesHas, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyType>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyType>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEq>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEqToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEq: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEq): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissingEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2$Outbound = {
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
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2ToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValue$inboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValue$Outbound = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2$Outbound;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValue$outboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValue$Outbound, z.ZodTypeDef, GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValue>;
export declare function getRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValueToJSON(getRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValue: GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValue): string;
export declare function getRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValueFromJSON(jsonString: string): SafeParseResult<GetRoutesMissingProjectRoutesResponse200ApplicationJSONResponseBodyValue, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse2$inboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissingProjectRoutesResponse2$Outbound = {
    type: string;
    key: string;
    value?: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteMissing2$Outbound | undefined;
};
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse2$outboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponse2$Outbound, z.ZodTypeDef, GetRoutesMissingProjectRoutesResponse2>;
export declare function getRoutesMissingProjectRoutesResponse2ToJSON(getRoutesMissingProjectRoutesResponse2: GetRoutesMissingProjectRoutesResponse2): string;
export declare function getRoutesMissingProjectRoutesResponse2FromJSON(jsonString: string): SafeParseResult<GetRoutesMissingProjectRoutesResponse2, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEq>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEqToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEq: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEq): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRouteEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2$Outbound = {
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
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2ToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse200ApplicationJSONValue$inboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponse200ApplicationJSONValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissingProjectRoutesResponse200ApplicationJSONValue$Outbound = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2$Outbound;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse200ApplicationJSONValue$outboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponse200ApplicationJSONValue$Outbound, z.ZodTypeDef, GetRoutesMissingProjectRoutesResponse200ApplicationJSONValue>;
export declare function getRoutesMissingProjectRoutesResponse200ApplicationJSONValueToJSON(getRoutesMissingProjectRoutesResponse200ApplicationJSONValue: GetRoutesMissingProjectRoutesResponse200ApplicationJSONValue): string;
export declare function getRoutesMissingProjectRoutesResponse200ApplicationJSONValueFromJSON(jsonString: string): SafeParseResult<GetRoutesMissingProjectRoutesResponse200ApplicationJSONValue, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse1$inboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissingProjectRoutesResponse1$Outbound = {
    type: "host";
    value: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody4RoutesRoute2$Outbound;
};
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse1$outboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponse1$Outbound, z.ZodTypeDef, GetRoutesMissingProjectRoutesResponse1>;
export declare function getRoutesMissingProjectRoutesResponse1ToJSON(getRoutesMissingProjectRoutesResponse1: GetRoutesMissingProjectRoutesResponse1): string;
export declare function getRoutesMissingProjectRoutesResponse1FromJSON(jsonString: string): SafeParseResult<GetRoutesMissingProjectRoutesResponse1, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesMissing$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesMissing, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesMissing$Outbound = GetRoutesMissingProjectRoutesResponse1$Outbound | (GetRoutesMissingProjectRoutesResponse2$Outbound & {
    type: "header";
}) | (GetRoutesMissingProjectRoutesResponse2$Outbound & {
    type: "cookie";
}) | (GetRoutesMissingProjectRoutesResponse2$Outbound & {
    type: "query";
});
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesMissing$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesMissing$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesMissing>;
export declare function getRoutesResponseBodyProjectRoutesMissingToJSON(getRoutesResponseBodyProjectRoutesMissing: GetRoutesResponseBodyProjectRoutesMissing): string;
export declare function getRoutesResponseBodyProjectRoutesMissingFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesMissing, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesAction$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesAction>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesAction$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesAction>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesMitigate$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesMitigate, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesMitigate$Outbound = {
    action: string;
};
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesMitigate$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesMitigate$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesMitigate>;
export declare function getRoutesResponseBodyProjectRoutesMitigateToJSON(getRoutesResponseBodyProjectRoutesMitigate: GetRoutesResponseBodyProjectRoutesMitigate): string;
export declare function getRoutesResponseBodyProjectRoutesMitigateFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesMitigate, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesResponseType$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesResponseType>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesResponseType$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesResponseType>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesOp$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesOp>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesOp$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesOp>;
/** @internal */
export declare const GetRoutesKeyProjectRoutesResponseEq$inboundSchema: z.ZodType<GetRoutesKeyProjectRoutesResponseEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesKeyProjectRoutesResponseEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesKeyProjectRoutesResponseEq$outboundSchema: z.ZodType<GetRoutesKeyProjectRoutesResponseEq$Outbound, z.ZodTypeDef, GetRoutesKeyProjectRoutesResponseEq>;
export declare function getRoutesKeyProjectRoutesResponseEqToJSON(getRoutesKeyProjectRoutesResponseEq: GetRoutesKeyProjectRoutesResponseEq): string;
export declare function getRoutesKeyProjectRoutesResponseEqFromJSON(jsonString: string): SafeParseResult<GetRoutesKeyProjectRoutesResponseEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesKeyProjectRoutesResponse2$inboundSchema: z.ZodType<GetRoutesKeyProjectRoutesResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesKeyProjectRoutesResponse2$Outbound = {
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
export declare const GetRoutesKeyProjectRoutesResponse2$outboundSchema: z.ZodType<GetRoutesKeyProjectRoutesResponse2$Outbound, z.ZodTypeDef, GetRoutesKeyProjectRoutesResponse2>;
export declare function getRoutesKeyProjectRoutesResponse2ToJSON(getRoutesKeyProjectRoutesResponse2: GetRoutesKeyProjectRoutesResponse2): string;
export declare function getRoutesKeyProjectRoutesResponse2FromJSON(jsonString: string): SafeParseResult<GetRoutesKeyProjectRoutesResponse2, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesKey$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesKey, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesKey$Outbound = string | GetRoutesKeyProjectRoutesResponse2$Outbound;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesKey$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesKey$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesKey>;
export declare function getRoutesResponseBodyProjectRoutesKeyToJSON(getRoutesResponseBodyProjectRoutesKey: GetRoutesResponseBodyProjectRoutesKey): string;
export declare function getRoutesResponseBodyProjectRoutesKeyFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesKey, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesResponseTarget$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesResponseTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesResponseTarget$Outbound = {
    key: string | GetRoutesKeyProjectRoutesResponse2$Outbound;
};
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesResponseTarget$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesResponseTarget$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesResponseTarget>;
export declare function getRoutesResponseBodyProjectRoutesResponseTargetToJSON(getRoutesResponseBodyProjectRoutesResponseTarget: GetRoutesResponseBodyProjectRoutesResponseTarget): string;
export declare function getRoutesResponseBodyProjectRoutesResponseTargetFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesResponseTarget, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesArgs$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesArgs, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesArgs$Outbound = string | Array<string>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesArgs$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesArgs$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesArgs>;
export declare function getRoutesResponseBodyProjectRoutesArgsToJSON(getRoutesResponseBodyProjectRoutesArgs: GetRoutesResponseBodyProjectRoutesArgs): string;
export declare function getRoutesResponseBodyProjectRoutesArgsFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesArgs, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesTransforms$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesTransforms, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesTransforms$Outbound = {
    type: string;
    op: string;
    target: GetRoutesResponseBodyProjectRoutesResponseTarget$Outbound;
    args?: string | Array<string> | undefined;
    env?: Array<string> | undefined;
};
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesTransforms$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesTransforms$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesTransforms>;
export declare function getRoutesResponseBodyProjectRoutesTransformsToJSON(getRoutesResponseBodyProjectRoutesTransforms: GetRoutesResponseBodyProjectRoutesTransforms): string;
export declare function getRoutesResponseBodyProjectRoutesTransformsFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesTransforms, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesLocale$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesLocale, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesLocale$Outbound = {
    redirect?: {
        [k: string]: string;
    } | undefined;
    cookie?: string | undefined;
};
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesLocale$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesLocale$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesLocale>;
export declare function getRoutesResponseBodyProjectRoutesLocaleToJSON(getRoutesResponseBodyProjectRoutesLocale: GetRoutesResponseBodyProjectRoutesLocale): string;
export declare function getRoutesResponseBodyProjectRoutesLocaleFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesLocale, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyRoute$inboundSchema: z.ZodType<GetRoutesResponseBodyRoute, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyRoute$Outbound = {
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
    has?: Array<GetRoutesHasProjectRoutesResponse1$Outbound | (GetRoutesHasProjectRoutesResponse2$Outbound & {
        type: "header";
    }) | (GetRoutesHasProjectRoutesResponse2$Outbound & {
        type: "cookie";
    }) | (GetRoutesHasProjectRoutesResponse2$Outbound & {
        type: "query";
    })> | undefined;
    missing?: Array<GetRoutesMissingProjectRoutesResponse1$Outbound | (GetRoutesMissingProjectRoutesResponse2$Outbound & {
        type: "header";
    }) | (GetRoutesMissingProjectRoutesResponse2$Outbound & {
        type: "cookie";
    }) | (GetRoutesMissingProjectRoutesResponse2$Outbound & {
        type: "query";
    })> | undefined;
    mitigate?: GetRoutesResponseBodyProjectRoutesMitigate$Outbound | undefined;
    transforms?: Array<GetRoutesResponseBodyProjectRoutesTransforms$Outbound> | undefined;
    env?: Array<string> | undefined;
    locale?: GetRoutesResponseBodyProjectRoutesLocale$Outbound | undefined;
    source?: string | undefined;
    destination?: string | undefined;
    statusCode?: number | undefined;
    middlewarePath?: string | undefined;
    middlewareRawSrc?: Array<string> | undefined;
    middleware?: number | undefined;
    respectOriginCacheControl?: boolean | undefined;
};
/** @internal */
export declare const GetRoutesResponseBodyRoute$outboundSchema: z.ZodType<GetRoutesResponseBodyRoute$Outbound, z.ZodTypeDef, GetRoutesResponseBodyRoute>;
export declare function getRoutesResponseBodyRouteToJSON(getRoutesResponseBodyRoute: GetRoutesResponseBodyRoute): string;
export declare function getRoutesResponseBodyRouteFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyRoute, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodySrcSyntax$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodySrcSyntax>;
/** @internal */
export declare const GetRoutesResponseBodySrcSyntax$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodySrcSyntax>;
/** @internal */
export declare const GetRoutesResponseBodyRouteType$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyRouteType>;
/** @internal */
export declare const GetRoutesResponseBodyRouteType$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyRouteType>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesResponseRoutes$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesResponseRoutes, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesResponseRoutes$Outbound = {
    id: string;
    name: string;
    description?: string | undefined;
    enabled?: boolean | undefined;
    staged?: boolean | undefined;
    route: GetRoutesResponseBodyRoute$Outbound;
    rawSrc?: string | undefined;
    rawDest?: string | undefined;
    srcSyntax?: string | undefined;
    routeType?: string | undefined;
};
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesResponseRoutes$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesResponseRoutes$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesResponseRoutes>;
export declare function getRoutesResponseBodyProjectRoutesResponseRoutesToJSON(getRoutesResponseBodyProjectRoutesResponseRoutes: GetRoutesResponseBodyProjectRoutesResponseRoutes): string;
export declare function getRoutesResponseBodyProjectRoutesResponseRoutesFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesResponseRoutes, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesResponseVersion$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesResponseVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesResponseVersion$Outbound = {
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
export declare const GetRoutesResponseBodyProjectRoutesResponseVersion$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesResponseVersion$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesResponseVersion>;
export declare function getRoutesResponseBodyProjectRoutesResponseVersionToJSON(getRoutesResponseBodyProjectRoutesResponseVersion: GetRoutesResponseBodyProjectRoutesResponseVersion): string;
export declare function getRoutesResponseBodyProjectRoutesResponseVersionFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesResponseVersion, SDKValidationError>;
/** @internal */
export declare const ResponseBodyLimit$inboundSchema: z.ZodType<ResponseBodyLimit, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyLimit$Outbound = {
    maxRoutes: number;
    currentRoutes: number;
};
/** @internal */
export declare const ResponseBodyLimit$outboundSchema: z.ZodType<ResponseBodyLimit$Outbound, z.ZodTypeDef, ResponseBodyLimit>;
export declare function responseBodyLimitToJSON(responseBodyLimit: ResponseBodyLimit): string;
export declare function responseBodyLimitFromJSON(jsonString: string): SafeParseResult<ResponseBodyLimit, SDKValidationError>;
/** @internal */
export declare const ResponseBody4$inboundSchema: z.ZodType<ResponseBody4, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBody4$Outbound = {
    routes: Array<GetRoutesResponseBodyProjectRoutesResponseRoutes$Outbound>;
    version: GetRoutesResponseBodyProjectRoutesResponseVersion$Outbound;
    limit: ResponseBodyLimit$Outbound;
};
/** @internal */
export declare const ResponseBody4$outboundSchema: z.ZodType<ResponseBody4$Outbound, z.ZodTypeDef, ResponseBody4>;
export declare function responseBody4ToJSON(responseBody4: ResponseBody4): string;
export declare function responseBody4FromJSON(jsonString: string): SafeParseResult<ResponseBody4, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse200Type$inboundSchema: z.ZodNativeEnum<typeof GetRoutesHasProjectRoutesResponse200Type>;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse200Type$outboundSchema: z.ZodNativeEnum<typeof GetRoutesHasProjectRoutesResponse200Type>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEq>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEqToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEq: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEq): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBodyEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2$Outbound = {
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
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2ToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse200Value$inboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponse200Value, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHasProjectRoutesResponse200Value$Outbound = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2$Outbound;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponse200Value$outboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponse200Value$Outbound, z.ZodTypeDef, GetRoutesHasProjectRoutesResponse200Value>;
export declare function getRoutesHasProjectRoutesResponse200ValueToJSON(getRoutesHasProjectRoutesResponse200Value: GetRoutesHasProjectRoutesResponse200Value): string;
export declare function getRoutesHasProjectRoutesResponse200ValueFromJSON(jsonString: string): SafeParseResult<GetRoutesHasProjectRoutesResponse200Value, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutes2$inboundSchema: z.ZodType<GetRoutesHasProjectRoutes2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHasProjectRoutes2$Outbound = {
    type: string;
    key: string;
    value?: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody2$Outbound | undefined;
};
/** @internal */
export declare const GetRoutesHasProjectRoutes2$outboundSchema: z.ZodType<GetRoutesHasProjectRoutes2$Outbound, z.ZodTypeDef, GetRoutesHasProjectRoutes2>;
export declare function getRoutesHasProjectRoutes2ToJSON(getRoutesHasProjectRoutes2: GetRoutesHasProjectRoutes2): string;
export declare function getRoutesHasProjectRoutes2FromJSON(jsonString: string): SafeParseResult<GetRoutesHasProjectRoutes2, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONEq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONEq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONEq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONEq>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONEqToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONEq: GetRoutesValueProjectRoutesResponse200ApplicationJSONEq): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONEqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJson2$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJson2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJson2$Outbound = {
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
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJson2$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJson2$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJson2>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSON2ToJSON(getRoutesValueProjectRoutesResponse200ApplicationJson2: GetRoutesValueProjectRoutesResponse200ApplicationJson2): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSON2FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJson2, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponseValue$inboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponseValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHasProjectRoutesResponseValue$Outbound = string | GetRoutesValueProjectRoutesResponse200ApplicationJson2$Outbound;
/** @internal */
export declare const GetRoutesHasProjectRoutesResponseValue$outboundSchema: z.ZodType<GetRoutesHasProjectRoutesResponseValue$Outbound, z.ZodTypeDef, GetRoutesHasProjectRoutesResponseValue>;
export declare function getRoutesHasProjectRoutesResponseValueToJSON(getRoutesHasProjectRoutesResponseValue: GetRoutesHasProjectRoutesResponseValue): string;
export declare function getRoutesHasProjectRoutesResponseValueFromJSON(jsonString: string): SafeParseResult<GetRoutesHasProjectRoutesResponseValue, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutes1$inboundSchema: z.ZodType<GetRoutesHasProjectRoutes1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHasProjectRoutes1$Outbound = {
    type: "host";
    value: string | GetRoutesValueProjectRoutesResponse200ApplicationJson2$Outbound;
};
/** @internal */
export declare const GetRoutesHasProjectRoutes1$outboundSchema: z.ZodType<GetRoutesHasProjectRoutes1$Outbound, z.ZodTypeDef, GetRoutesHasProjectRoutes1>;
export declare function getRoutesHasProjectRoutes1ToJSON(getRoutesHasProjectRoutes1: GetRoutesHasProjectRoutes1): string;
export declare function getRoutesHasProjectRoutes1FromJSON(jsonString: string): SafeParseResult<GetRoutesHasProjectRoutes1, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyHas$inboundSchema: z.ZodType<GetRoutesResponseBodyHas, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyHas$Outbound = GetRoutesHasProjectRoutes1$Outbound | (GetRoutesHasProjectRoutes2$Outbound & {
    type: "header";
}) | (GetRoutesHasProjectRoutes2$Outbound & {
    type: "cookie";
}) | (GetRoutesHasProjectRoutes2$Outbound & {
    type: "query";
});
/** @internal */
export declare const GetRoutesResponseBodyHas$outboundSchema: z.ZodType<GetRoutesResponseBodyHas$Outbound, z.ZodTypeDef, GetRoutesResponseBodyHas>;
export declare function getRoutesResponseBodyHasToJSON(getRoutesResponseBodyHas: GetRoutesResponseBodyHas): string;
export declare function getRoutesResponseBodyHasFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyHas, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse200Type$inboundSchema: z.ZodNativeEnum<typeof GetRoutesMissingProjectRoutesResponse200Type>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse200Type$outboundSchema: z.ZodNativeEnum<typeof GetRoutesMissingProjectRoutesResponse200Type>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEq>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEqToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEq: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEq): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3RoutesEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2$Outbound = {
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
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2ToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse200Value$inboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponse200Value, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissingProjectRoutesResponse200Value$Outbound = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2$Outbound;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponse200Value$outboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponse200Value$Outbound, z.ZodTypeDef, GetRoutesMissingProjectRoutesResponse200Value>;
export declare function getRoutesMissingProjectRoutesResponse200ValueToJSON(getRoutesMissingProjectRoutesResponse200Value: GetRoutesMissingProjectRoutesResponse200Value): string;
export declare function getRoutesMissingProjectRoutesResponse200ValueFromJSON(jsonString: string): SafeParseResult<GetRoutesMissingProjectRoutesResponse200Value, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutes2$inboundSchema: z.ZodType<GetRoutesMissingProjectRoutes2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissingProjectRoutes2$Outbound = {
    type: string;
    key: string;
    value?: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Routes2$Outbound | undefined;
};
/** @internal */
export declare const GetRoutesMissingProjectRoutes2$outboundSchema: z.ZodType<GetRoutesMissingProjectRoutes2$Outbound, z.ZodTypeDef, GetRoutesMissingProjectRoutes2>;
export declare function getRoutesMissingProjectRoutes2ToJSON(getRoutesMissingProjectRoutes2: GetRoutesMissingProjectRoutes2): string;
export declare function getRoutesMissingProjectRoutes2FromJSON(jsonString: string): SafeParseResult<GetRoutesMissingProjectRoutes2, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Eq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Eq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Eq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Eq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Eq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Eq>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3EqToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Eq: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Eq): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3EqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody3Eq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32$Outbound = {
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
export declare const GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32>;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32ToJSON(getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32: GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32): string;
export declare function getRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponseValue$inboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponseValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissingProjectRoutesResponseValue$Outbound = string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32$Outbound;
/** @internal */
export declare const GetRoutesMissingProjectRoutesResponseValue$outboundSchema: z.ZodType<GetRoutesMissingProjectRoutesResponseValue$Outbound, z.ZodTypeDef, GetRoutesMissingProjectRoutesResponseValue>;
export declare function getRoutesMissingProjectRoutesResponseValueToJSON(getRoutesMissingProjectRoutesResponseValue: GetRoutesMissingProjectRoutesResponseValue): string;
export declare function getRoutesMissingProjectRoutesResponseValueFromJSON(jsonString: string): SafeParseResult<GetRoutesMissingProjectRoutesResponseValue, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutes1$inboundSchema: z.ZodType<GetRoutesMissingProjectRoutes1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissingProjectRoutes1$Outbound = {
    type: "host";
    value: string | GetRoutesValueProjectRoutesResponse200ApplicationJSONResponseBody32$Outbound;
};
/** @internal */
export declare const GetRoutesMissingProjectRoutes1$outboundSchema: z.ZodType<GetRoutesMissingProjectRoutes1$Outbound, z.ZodTypeDef, GetRoutesMissingProjectRoutes1>;
export declare function getRoutesMissingProjectRoutes1ToJSON(getRoutesMissingProjectRoutes1: GetRoutesMissingProjectRoutes1): string;
export declare function getRoutesMissingProjectRoutes1FromJSON(jsonString: string): SafeParseResult<GetRoutesMissingProjectRoutes1, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyMissing$inboundSchema: z.ZodType<GetRoutesResponseBodyMissing, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyMissing$Outbound = GetRoutesMissingProjectRoutes1$Outbound | (GetRoutesMissingProjectRoutes2$Outbound & {
    type: "header";
}) | (GetRoutesMissingProjectRoutes2$Outbound & {
    type: "cookie";
}) | (GetRoutesMissingProjectRoutes2$Outbound & {
    type: "query";
});
/** @internal */
export declare const GetRoutesResponseBodyMissing$outboundSchema: z.ZodType<GetRoutesResponseBodyMissing$Outbound, z.ZodTypeDef, GetRoutesResponseBodyMissing>;
export declare function getRoutesResponseBodyMissingToJSON(getRoutesResponseBodyMissing: GetRoutesResponseBodyMissing): string;
export declare function getRoutesResponseBodyMissingFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyMissing, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyAction$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyAction>;
/** @internal */
export declare const GetRoutesResponseBodyAction$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyAction>;
/** @internal */
export declare const GetRoutesResponseBodyMitigate$inboundSchema: z.ZodType<GetRoutesResponseBodyMitigate, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyMitigate$Outbound = {
    action: string;
};
/** @internal */
export declare const GetRoutesResponseBodyMitigate$outboundSchema: z.ZodType<GetRoutesResponseBodyMitigate$Outbound, z.ZodTypeDef, GetRoutesResponseBodyMitigate>;
export declare function getRoutesResponseBodyMitigateToJSON(getRoutesResponseBodyMitigate: GetRoutesResponseBodyMitigate): string;
export declare function getRoutesResponseBodyMitigateFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyMitigate, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesType$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesType>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesType$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesType>;
/** @internal */
export declare const GetRoutesResponseBodyOp$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyOp>;
/** @internal */
export declare const GetRoutesResponseBodyOp$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyOp>;
/** @internal */
export declare const GetRoutesKeyProjectRoutesEq$inboundSchema: z.ZodType<GetRoutesKeyProjectRoutesEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesKeyProjectRoutesEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesKeyProjectRoutesEq$outboundSchema: z.ZodType<GetRoutesKeyProjectRoutesEq$Outbound, z.ZodTypeDef, GetRoutesKeyProjectRoutesEq>;
export declare function getRoutesKeyProjectRoutesEqToJSON(getRoutesKeyProjectRoutesEq: GetRoutesKeyProjectRoutesEq): string;
export declare function getRoutesKeyProjectRoutesEqFromJSON(jsonString: string): SafeParseResult<GetRoutesKeyProjectRoutesEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesKeyProjectRoutes2$inboundSchema: z.ZodType<GetRoutesKeyProjectRoutes2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesKeyProjectRoutes2$Outbound = {
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
export declare const GetRoutesKeyProjectRoutes2$outboundSchema: z.ZodType<GetRoutesKeyProjectRoutes2$Outbound, z.ZodTypeDef, GetRoutesKeyProjectRoutes2>;
export declare function getRoutesKeyProjectRoutes2ToJSON(getRoutesKeyProjectRoutes2: GetRoutesKeyProjectRoutes2): string;
export declare function getRoutesKeyProjectRoutes2FromJSON(jsonString: string): SafeParseResult<GetRoutesKeyProjectRoutes2, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyKey$inboundSchema: z.ZodType<GetRoutesResponseBodyKey, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyKey$Outbound = string | GetRoutesKeyProjectRoutes2$Outbound;
/** @internal */
export declare const GetRoutesResponseBodyKey$outboundSchema: z.ZodType<GetRoutesResponseBodyKey$Outbound, z.ZodTypeDef, GetRoutesResponseBodyKey>;
export declare function getRoutesResponseBodyKeyToJSON(getRoutesResponseBodyKey: GetRoutesResponseBodyKey): string;
export declare function getRoutesResponseBodyKeyFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyKey, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesTarget$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesTarget$Outbound = {
    key: string | GetRoutesKeyProjectRoutes2$Outbound;
};
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesTarget$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesTarget$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesTarget>;
export declare function getRoutesResponseBodyProjectRoutesTargetToJSON(getRoutesResponseBodyProjectRoutesTarget: GetRoutesResponseBodyProjectRoutesTarget): string;
export declare function getRoutesResponseBodyProjectRoutesTargetFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesTarget, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyArgs$inboundSchema: z.ZodType<GetRoutesResponseBodyArgs, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyArgs$Outbound = string | Array<string>;
/** @internal */
export declare const GetRoutesResponseBodyArgs$outboundSchema: z.ZodType<GetRoutesResponseBodyArgs$Outbound, z.ZodTypeDef, GetRoutesResponseBodyArgs>;
export declare function getRoutesResponseBodyArgsToJSON(getRoutesResponseBodyArgs: GetRoutesResponseBodyArgs): string;
export declare function getRoutesResponseBodyArgsFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyArgs, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyTransforms$inboundSchema: z.ZodType<GetRoutesResponseBodyTransforms, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyTransforms$Outbound = {
    type: string;
    op: string;
    target: GetRoutesResponseBodyProjectRoutesTarget$Outbound;
    args?: string | Array<string> | undefined;
    env?: Array<string> | undefined;
};
/** @internal */
export declare const GetRoutesResponseBodyTransforms$outboundSchema: z.ZodType<GetRoutesResponseBodyTransforms$Outbound, z.ZodTypeDef, GetRoutesResponseBodyTransforms>;
export declare function getRoutesResponseBodyTransformsToJSON(getRoutesResponseBodyTransforms: GetRoutesResponseBodyTransforms): string;
export declare function getRoutesResponseBodyTransformsFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyTransforms, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyLocale$inboundSchema: z.ZodType<GetRoutesResponseBodyLocale, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyLocale$Outbound = {
    redirect?: {
        [k: string]: string;
    } | undefined;
    cookie?: string | undefined;
};
/** @internal */
export declare const GetRoutesResponseBodyLocale$outboundSchema: z.ZodType<GetRoutesResponseBodyLocale$Outbound, z.ZodTypeDef, GetRoutesResponseBodyLocale>;
export declare function getRoutesResponseBodyLocaleToJSON(getRoutesResponseBodyLocale: GetRoutesResponseBodyLocale): string;
export declare function getRoutesResponseBodyLocaleFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyLocale, SDKValidationError>;
/** @internal */
export declare const ResponseBodyRoute$inboundSchema: z.ZodType<ResponseBodyRoute, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyRoute$Outbound = {
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
    has?: Array<GetRoutesHasProjectRoutes1$Outbound | (GetRoutesHasProjectRoutes2$Outbound & {
        type: "header";
    }) | (GetRoutesHasProjectRoutes2$Outbound & {
        type: "cookie";
    }) | (GetRoutesHasProjectRoutes2$Outbound & {
        type: "query";
    })> | undefined;
    missing?: Array<GetRoutesMissingProjectRoutes1$Outbound | (GetRoutesMissingProjectRoutes2$Outbound & {
        type: "header";
    }) | (GetRoutesMissingProjectRoutes2$Outbound & {
        type: "cookie";
    }) | (GetRoutesMissingProjectRoutes2$Outbound & {
        type: "query";
    })> | undefined;
    mitigate?: GetRoutesResponseBodyMitigate$Outbound | undefined;
    transforms?: Array<GetRoutesResponseBodyTransforms$Outbound> | undefined;
    env?: Array<string> | undefined;
    locale?: GetRoutesResponseBodyLocale$Outbound | undefined;
    source?: string | undefined;
    destination?: string | undefined;
    statusCode?: number | undefined;
    middlewarePath?: string | undefined;
    middlewareRawSrc?: Array<string> | undefined;
    middleware?: number | undefined;
    respectOriginCacheControl?: boolean | undefined;
};
/** @internal */
export declare const ResponseBodyRoute$outboundSchema: z.ZodType<ResponseBodyRoute$Outbound, z.ZodTypeDef, ResponseBodyRoute>;
export declare function responseBodyRouteToJSON(responseBodyRoute: ResponseBodyRoute): string;
export declare function responseBodyRouteFromJSON(jsonString: string): SafeParseResult<ResponseBodyRoute, SDKValidationError>;
/** @internal */
export declare const ResponseBodySrcSyntax$inboundSchema: z.ZodNativeEnum<typeof ResponseBodySrcSyntax>;
/** @internal */
export declare const ResponseBodySrcSyntax$outboundSchema: z.ZodNativeEnum<typeof ResponseBodySrcSyntax>;
/** @internal */
export declare const ResponseBodyRouteType$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyRouteType>;
/** @internal */
export declare const ResponseBodyRouteType$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyRouteType>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesRoutes$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesRoutes, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesRoutes$Outbound = {
    id: string;
    name: string;
    description?: string | undefined;
    enabled?: boolean | undefined;
    staged?: boolean | undefined;
    route: ResponseBodyRoute$Outbound;
    rawSrc?: string | undefined;
    rawDest?: string | undefined;
    srcSyntax?: string | undefined;
    routeType?: string | undefined;
};
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesRoutes$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesRoutes$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesRoutes>;
export declare function getRoutesResponseBodyProjectRoutesRoutesToJSON(getRoutesResponseBodyProjectRoutesRoutes: GetRoutesResponseBodyProjectRoutesRoutes): string;
export declare function getRoutesResponseBodyProjectRoutesRoutesFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesRoutes, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesVersion$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesVersion$Outbound = {
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
export declare const GetRoutesResponseBodyProjectRoutesVersion$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesVersion$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesVersion>;
export declare function getRoutesResponseBodyProjectRoutesVersionToJSON(getRoutesResponseBodyProjectRoutesVersion: GetRoutesResponseBodyProjectRoutesVersion): string;
export declare function getRoutesResponseBodyProjectRoutesVersionFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesVersion, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBody3$inboundSchema: z.ZodType<GetRoutesResponseBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBody3$Outbound = {
    routes: Array<GetRoutesResponseBodyProjectRoutesRoutes$Outbound>;
    version: GetRoutesResponseBodyProjectRoutesVersion$Outbound;
};
/** @internal */
export declare const GetRoutesResponseBody3$outboundSchema: z.ZodType<GetRoutesResponseBody3$Outbound, z.ZodTypeDef, GetRoutesResponseBody3>;
export declare function getRoutesResponseBody3ToJSON(getRoutesResponseBody3: GetRoutesResponseBody3): string;
export declare function getRoutesResponseBody3FromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBody3, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutesType$inboundSchema: z.ZodNativeEnum<typeof GetRoutesHasProjectRoutesType>;
/** @internal */
export declare const GetRoutesHasProjectRoutesType$outboundSchema: z.ZodNativeEnum<typeof GetRoutesHasProjectRoutesType>;
/** @internal */
export declare const GetRoutesValueProjectRoutesEq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesEq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesEq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesEq>;
export declare function getRoutesValueProjectRoutesEqToJSON(getRoutesValueProjectRoutesEq: GetRoutesValueProjectRoutesEq): string;
export declare function getRoutesValueProjectRoutesEqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutes2$inboundSchema: z.ZodType<GetRoutesValueProjectRoutes2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutes2$Outbound = {
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
export declare const GetRoutesValueProjectRoutes2$outboundSchema: z.ZodType<GetRoutesValueProjectRoutes2$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutes2>;
export declare function getRoutesValueProjectRoutes2ToJSON(getRoutesValueProjectRoutes2: GetRoutesValueProjectRoutes2): string;
export declare function getRoutesValueProjectRoutes2FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutes2, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasProjectRoutesValue$inboundSchema: z.ZodType<GetRoutesHasProjectRoutesValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHasProjectRoutesValue$Outbound = string | GetRoutesValueProjectRoutes2$Outbound;
/** @internal */
export declare const GetRoutesHasProjectRoutesValue$outboundSchema: z.ZodType<GetRoutesHasProjectRoutesValue$Outbound, z.ZodTypeDef, GetRoutesHasProjectRoutesValue>;
export declare function getRoutesHasProjectRoutesValueToJSON(getRoutesHasProjectRoutesValue: GetRoutesHasProjectRoutesValue): string;
export declare function getRoutesHasProjectRoutesValueFromJSON(jsonString: string): SafeParseResult<GetRoutesHasProjectRoutesValue, SDKValidationError>;
/** @internal */
export declare const GetRoutesHas2$inboundSchema: z.ZodType<GetRoutesHas2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHas2$Outbound = {
    type: string;
    key: string;
    value?: string | GetRoutesValueProjectRoutes2$Outbound | undefined;
};
/** @internal */
export declare const GetRoutesHas2$outboundSchema: z.ZodType<GetRoutesHas2$Outbound, z.ZodTypeDef, GetRoutesHas2>;
export declare function getRoutesHas2ToJSON(getRoutesHas2: GetRoutesHas2): string;
export declare function getRoutesHas2FromJSON(jsonString: string): SafeParseResult<GetRoutesHas2, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueEq$inboundSchema: z.ZodType<GetRoutesValueEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueEq$outboundSchema: z.ZodType<GetRoutesValueEq$Outbound, z.ZodTypeDef, GetRoutesValueEq>;
export declare function getRoutesValueEqToJSON(getRoutesValueEq: GetRoutesValueEq): string;
export declare function getRoutesValueEqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValue2$inboundSchema: z.ZodType<GetRoutesValue2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValue2$Outbound = {
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
export declare const GetRoutesValue2$outboundSchema: z.ZodType<GetRoutesValue2$Outbound, z.ZodTypeDef, GetRoutesValue2>;
export declare function getRoutesValue2ToJSON(getRoutesValue2: GetRoutesValue2): string;
export declare function getRoutesValue2FromJSON(jsonString: string): SafeParseResult<GetRoutesValue2, SDKValidationError>;
/** @internal */
export declare const GetRoutesHasValue$inboundSchema: z.ZodType<GetRoutesHasValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHasValue$Outbound = string | GetRoutesValue2$Outbound;
/** @internal */
export declare const GetRoutesHasValue$outboundSchema: z.ZodType<GetRoutesHasValue$Outbound, z.ZodTypeDef, GetRoutesHasValue>;
export declare function getRoutesHasValueToJSON(getRoutesHasValue: GetRoutesHasValue): string;
export declare function getRoutesHasValueFromJSON(jsonString: string): SafeParseResult<GetRoutesHasValue, SDKValidationError>;
/** @internal */
export declare const GetRoutesHas1$inboundSchema: z.ZodType<GetRoutesHas1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesHas1$Outbound = {
    type: "host";
    value: string | GetRoutesValue2$Outbound;
};
/** @internal */
export declare const GetRoutesHas1$outboundSchema: z.ZodType<GetRoutesHas1$Outbound, z.ZodTypeDef, GetRoutesHas1>;
export declare function getRoutesHas1ToJSON(getRoutesHas1: GetRoutesHas1): string;
export declare function getRoutesHas1FromJSON(jsonString: string): SafeParseResult<GetRoutesHas1, SDKValidationError>;
/** @internal */
export declare const ResponseBodyHas$inboundSchema: z.ZodType<ResponseBodyHas, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyHas$Outbound = GetRoutesHas1$Outbound | (GetRoutesHas2$Outbound & {
    type: "header";
}) | (GetRoutesHas2$Outbound & {
    type: "cookie";
}) | (GetRoutesHas2$Outbound & {
    type: "query";
});
/** @internal */
export declare const ResponseBodyHas$outboundSchema: z.ZodType<ResponseBodyHas$Outbound, z.ZodTypeDef, ResponseBodyHas>;
export declare function responseBodyHasToJSON(responseBodyHas: ResponseBodyHas): string;
export declare function responseBodyHasFromJSON(jsonString: string): SafeParseResult<ResponseBodyHas, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesType$inboundSchema: z.ZodNativeEnum<typeof GetRoutesMissingProjectRoutesType>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesType$outboundSchema: z.ZodNativeEnum<typeof GetRoutesMissingProjectRoutesType>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200Eq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200Eq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse200Eq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse200Eq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse200Eq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse200Eq>;
export declare function getRoutesValueProjectRoutesResponse200EqToJSON(getRoutesValueProjectRoutesResponse200Eq: GetRoutesValueProjectRoutesResponse200Eq): string;
export declare function getRoutesValueProjectRoutesResponse200EqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse200Eq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse2002$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse2002, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse2002$Outbound = {
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
export declare const GetRoutesValueProjectRoutesResponse2002$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse2002$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse2002>;
export declare function getRoutesValueProjectRoutesResponse2002ToJSON(getRoutesValueProjectRoutesResponse2002: GetRoutesValueProjectRoutesResponse2002): string;
export declare function getRoutesValueProjectRoutesResponse2002FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse2002, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingProjectRoutesValue$inboundSchema: z.ZodType<GetRoutesMissingProjectRoutesValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissingProjectRoutesValue$Outbound = string | GetRoutesValueProjectRoutesResponse2002$Outbound;
/** @internal */
export declare const GetRoutesMissingProjectRoutesValue$outboundSchema: z.ZodType<GetRoutesMissingProjectRoutesValue$Outbound, z.ZodTypeDef, GetRoutesMissingProjectRoutesValue>;
export declare function getRoutesMissingProjectRoutesValueToJSON(getRoutesMissingProjectRoutesValue: GetRoutesMissingProjectRoutesValue): string;
export declare function getRoutesMissingProjectRoutesValueFromJSON(jsonString: string): SafeParseResult<GetRoutesMissingProjectRoutesValue, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissing2$inboundSchema: z.ZodType<GetRoutesMissing2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissing2$Outbound = {
    type: string;
    key: string;
    value?: string | GetRoutesValueProjectRoutesResponse2002$Outbound | undefined;
};
/** @internal */
export declare const GetRoutesMissing2$outboundSchema: z.ZodType<GetRoutesMissing2$Outbound, z.ZodTypeDef, GetRoutesMissing2>;
export declare function getRoutesMissing2ToJSON(getRoutesMissing2: GetRoutesMissing2): string;
export declare function getRoutesMissing2FromJSON(jsonString: string): SafeParseResult<GetRoutesMissing2, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponseEq$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponseEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponseEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponseEq$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponseEq$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponseEq>;
export declare function getRoutesValueProjectRoutesResponseEqToJSON(getRoutesValueProjectRoutesResponseEq: GetRoutesValueProjectRoutesResponseEq): string;
export declare function getRoutesValueProjectRoutesResponseEqFromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponseEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesValueProjectRoutesResponse2$inboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesValueProjectRoutesResponse2$Outbound = {
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
export declare const GetRoutesValueProjectRoutesResponse2$outboundSchema: z.ZodType<GetRoutesValueProjectRoutesResponse2$Outbound, z.ZodTypeDef, GetRoutesValueProjectRoutesResponse2>;
export declare function getRoutesValueProjectRoutesResponse2ToJSON(getRoutesValueProjectRoutesResponse2: GetRoutesValueProjectRoutesResponse2): string;
export declare function getRoutesValueProjectRoutesResponse2FromJSON(jsonString: string): SafeParseResult<GetRoutesValueProjectRoutesResponse2, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissingValue$inboundSchema: z.ZodType<GetRoutesMissingValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissingValue$Outbound = string | GetRoutesValueProjectRoutesResponse2$Outbound;
/** @internal */
export declare const GetRoutesMissingValue$outboundSchema: z.ZodType<GetRoutesMissingValue$Outbound, z.ZodTypeDef, GetRoutesMissingValue>;
export declare function getRoutesMissingValueToJSON(getRoutesMissingValue: GetRoutesMissingValue): string;
export declare function getRoutesMissingValueFromJSON(jsonString: string): SafeParseResult<GetRoutesMissingValue, SDKValidationError>;
/** @internal */
export declare const GetRoutesMissing1$inboundSchema: z.ZodType<GetRoutesMissing1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesMissing1$Outbound = {
    type: "host";
    value: string | GetRoutesValueProjectRoutesResponse2$Outbound;
};
/** @internal */
export declare const GetRoutesMissing1$outboundSchema: z.ZodType<GetRoutesMissing1$Outbound, z.ZodTypeDef, GetRoutesMissing1>;
export declare function getRoutesMissing1ToJSON(getRoutesMissing1: GetRoutesMissing1): string;
export declare function getRoutesMissing1FromJSON(jsonString: string): SafeParseResult<GetRoutesMissing1, SDKValidationError>;
/** @internal */
export declare const ResponseBodyMissing$inboundSchema: z.ZodType<ResponseBodyMissing, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyMissing$Outbound = GetRoutesMissing1$Outbound | (GetRoutesMissing2$Outbound & {
    type: "header";
}) | (GetRoutesMissing2$Outbound & {
    type: "cookie";
}) | (GetRoutesMissing2$Outbound & {
    type: "query";
});
/** @internal */
export declare const ResponseBodyMissing$outboundSchema: z.ZodType<ResponseBodyMissing$Outbound, z.ZodTypeDef, ResponseBodyMissing>;
export declare function responseBodyMissingToJSON(responseBodyMissing: ResponseBodyMissing): string;
export declare function responseBodyMissingFromJSON(jsonString: string): SafeParseResult<ResponseBodyMissing, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesResponseAction$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesResponseAction>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesResponseAction$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesResponseAction>;
/** @internal */
export declare const ResponseBodyMitigate$inboundSchema: z.ZodType<ResponseBodyMitigate, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyMitigate$Outbound = {
    action: string;
};
/** @internal */
export declare const ResponseBodyMitigate$outboundSchema: z.ZodType<ResponseBodyMitigate$Outbound, z.ZodTypeDef, ResponseBodyMitigate>;
export declare function responseBodyMitigateToJSON(responseBodyMitigate: ResponseBodyMitigate): string;
export declare function responseBodyMitigateFromJSON(jsonString: string): SafeParseResult<ResponseBodyMitigate, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyType>;
/** @internal */
export declare const GetRoutesResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyType>;
/** @internal */
export declare const ResponseBodyOp$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyOp>;
/** @internal */
export declare const ResponseBodyOp$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyOp>;
/** @internal */
export declare const GetRoutesKeyEq$inboundSchema: z.ZodType<GetRoutesKeyEq, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesKeyEq$Outbound = string | number;
/** @internal */
export declare const GetRoutesKeyEq$outboundSchema: z.ZodType<GetRoutesKeyEq$Outbound, z.ZodTypeDef, GetRoutesKeyEq>;
export declare function getRoutesKeyEqToJSON(getRoutesKeyEq: GetRoutesKeyEq): string;
export declare function getRoutesKeyEqFromJSON(jsonString: string): SafeParseResult<GetRoutesKeyEq, SDKValidationError>;
/** @internal */
export declare const GetRoutesKey2$inboundSchema: z.ZodType<GetRoutesKey2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesKey2$Outbound = {
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
export declare const GetRoutesKey2$outboundSchema: z.ZodType<GetRoutesKey2$Outbound, z.ZodTypeDef, GetRoutesKey2>;
export declare function getRoutesKey2ToJSON(getRoutesKey2: GetRoutesKey2): string;
export declare function getRoutesKey2FromJSON(jsonString: string): SafeParseResult<GetRoutesKey2, SDKValidationError>;
/** @internal */
export declare const ResponseBodyKey$inboundSchema: z.ZodType<ResponseBodyKey, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyKey$Outbound = string | GetRoutesKey2$Outbound;
/** @internal */
export declare const ResponseBodyKey$outboundSchema: z.ZodType<ResponseBodyKey$Outbound, z.ZodTypeDef, ResponseBodyKey>;
export declare function responseBodyKeyToJSON(responseBodyKey: ResponseBodyKey): string;
export declare function responseBodyKeyFromJSON(jsonString: string): SafeParseResult<ResponseBodyKey, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyTarget$inboundSchema: z.ZodType<GetRoutesResponseBodyTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyTarget$Outbound = {
    key: string | GetRoutesKey2$Outbound;
};
/** @internal */
export declare const GetRoutesResponseBodyTarget$outboundSchema: z.ZodType<GetRoutesResponseBodyTarget$Outbound, z.ZodTypeDef, GetRoutesResponseBodyTarget>;
export declare function getRoutesResponseBodyTargetToJSON(getRoutesResponseBodyTarget: GetRoutesResponseBodyTarget): string;
export declare function getRoutesResponseBodyTargetFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyTarget, SDKValidationError>;
/** @internal */
export declare const ResponseBodyArgs$inboundSchema: z.ZodType<ResponseBodyArgs, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyArgs$Outbound = string | Array<string>;
/** @internal */
export declare const ResponseBodyArgs$outboundSchema: z.ZodType<ResponseBodyArgs$Outbound, z.ZodTypeDef, ResponseBodyArgs>;
export declare function responseBodyArgsToJSON(responseBodyArgs: ResponseBodyArgs): string;
export declare function responseBodyArgsFromJSON(jsonString: string): SafeParseResult<ResponseBodyArgs, SDKValidationError>;
/** @internal */
export declare const ResponseBodyTransforms$inboundSchema: z.ZodType<ResponseBodyTransforms, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyTransforms$Outbound = {
    type: string;
    op: string;
    target: GetRoutesResponseBodyTarget$Outbound;
    args?: string | Array<string> | undefined;
    env?: Array<string> | undefined;
};
/** @internal */
export declare const ResponseBodyTransforms$outboundSchema: z.ZodType<ResponseBodyTransforms$Outbound, z.ZodTypeDef, ResponseBodyTransforms>;
export declare function responseBodyTransformsToJSON(responseBodyTransforms: ResponseBodyTransforms): string;
export declare function responseBodyTransformsFromJSON(jsonString: string): SafeParseResult<ResponseBodyTransforms, SDKValidationError>;
/** @internal */
export declare const ResponseBodyLocale$inboundSchema: z.ZodType<ResponseBodyLocale, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyLocale$Outbound = {
    redirect?: {
        [k: string]: string;
    } | undefined;
    cookie?: string | undefined;
};
/** @internal */
export declare const ResponseBodyLocale$outboundSchema: z.ZodType<ResponseBodyLocale$Outbound, z.ZodTypeDef, ResponseBodyLocale>;
export declare function responseBodyLocaleToJSON(responseBodyLocale: ResponseBodyLocale): string;
export declare function responseBodyLocaleFromJSON(jsonString: string): SafeParseResult<ResponseBodyLocale, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesRoute$inboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesRoute, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyProjectRoutesRoute$Outbound = {
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
    has?: Array<GetRoutesHas1$Outbound | (GetRoutesHas2$Outbound & {
        type: "header";
    }) | (GetRoutesHas2$Outbound & {
        type: "cookie";
    }) | (GetRoutesHas2$Outbound & {
        type: "query";
    })> | undefined;
    missing?: Array<GetRoutesMissing1$Outbound | (GetRoutesMissing2$Outbound & {
        type: "header";
    }) | (GetRoutesMissing2$Outbound & {
        type: "cookie";
    }) | (GetRoutesMissing2$Outbound & {
        type: "query";
    })> | undefined;
    mitigate?: ResponseBodyMitigate$Outbound | undefined;
    transforms?: Array<ResponseBodyTransforms$Outbound> | undefined;
    env?: Array<string> | undefined;
    locale?: ResponseBodyLocale$Outbound | undefined;
    source?: string | undefined;
    destination?: string | undefined;
    statusCode?: number | undefined;
    middlewarePath?: string | undefined;
    middlewareRawSrc?: Array<string> | undefined;
    middleware?: number | undefined;
    respectOriginCacheControl?: boolean | undefined;
};
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesRoute$outboundSchema: z.ZodType<GetRoutesResponseBodyProjectRoutesRoute$Outbound, z.ZodTypeDef, GetRoutesResponseBodyProjectRoutesRoute>;
export declare function getRoutesResponseBodyProjectRoutesRouteToJSON(getRoutesResponseBodyProjectRoutesRoute: GetRoutesResponseBodyProjectRoutesRoute): string;
export declare function getRoutesResponseBodyProjectRoutesRouteFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyProjectRoutesRoute, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesSrcSyntax$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesSrcSyntax>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesSrcSyntax$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesSrcSyntax>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesRouteType$inboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesRouteType>;
/** @internal */
export declare const GetRoutesResponseBodyProjectRoutesRouteType$outboundSchema: z.ZodNativeEnum<typeof GetRoutesResponseBodyProjectRoutesRouteType>;
/** @internal */
export declare const GetRoutesResponseBodyRoutes$inboundSchema: z.ZodType<GetRoutesResponseBodyRoutes, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyRoutes$Outbound = {
    id: string;
    name: string;
    description?: string | undefined;
    enabled?: boolean | undefined;
    staged?: boolean | undefined;
    route: GetRoutesResponseBodyProjectRoutesRoute$Outbound;
    rawSrc?: string | undefined;
    rawDest?: string | undefined;
    srcSyntax?: string | undefined;
    routeType?: string | undefined;
};
/** @internal */
export declare const GetRoutesResponseBodyRoutes$outboundSchema: z.ZodType<GetRoutesResponseBodyRoutes$Outbound, z.ZodTypeDef, GetRoutesResponseBodyRoutes>;
export declare function getRoutesResponseBodyRoutesToJSON(getRoutesResponseBodyRoutes: GetRoutesResponseBodyRoutes): string;
export declare function getRoutesResponseBodyRoutesFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyRoutes, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBodyVersion$inboundSchema: z.ZodType<GetRoutesResponseBodyVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBodyVersion$Outbound = {
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
export declare const GetRoutesResponseBodyVersion$outboundSchema: z.ZodType<GetRoutesResponseBodyVersion$Outbound, z.ZodTypeDef, GetRoutesResponseBodyVersion>;
export declare function getRoutesResponseBodyVersionToJSON(getRoutesResponseBodyVersion: GetRoutesResponseBodyVersion): string;
export declare function getRoutesResponseBodyVersionFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBodyVersion, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBody2$inboundSchema: z.ZodType<GetRoutesResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBody2$Outbound = {
    routes: Array<GetRoutesResponseBodyRoutes$Outbound>;
    version: GetRoutesResponseBodyVersion$Outbound;
    diffCount: number;
};
/** @internal */
export declare const GetRoutesResponseBody2$outboundSchema: z.ZodType<GetRoutesResponseBody2$Outbound, z.ZodTypeDef, GetRoutesResponseBody2>;
export declare function getRoutesResponseBody2ToJSON(getRoutesResponseBody2: GetRoutesResponseBody2): string;
export declare function getRoutesResponseBody2FromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBody1$inboundSchema: z.ZodType<GetRoutesResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBody1$Outbound = {};
/** @internal */
export declare const GetRoutesResponseBody1$outboundSchema: z.ZodType<GetRoutesResponseBody1$Outbound, z.ZodTypeDef, GetRoutesResponseBody1>;
export declare function getRoutesResponseBody1ToJSON(getRoutesResponseBody1: GetRoutesResponseBody1): string;
export declare function getRoutesResponseBody1FromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetRoutesResponseBody$inboundSchema: z.ZodType<GetRoutesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRoutesResponseBody$Outbound = GetRoutesResponseBody2$Outbound | ResponseBody4$Outbound | GetRoutesResponseBody3$Outbound | GetRoutesResponseBody1$Outbound;
/** @internal */
export declare const GetRoutesResponseBody$outboundSchema: z.ZodType<GetRoutesResponseBody$Outbound, z.ZodTypeDef, GetRoutesResponseBody>;
export declare function getRoutesResponseBodyToJSON(getRoutesResponseBody: GetRoutesResponseBody): string;
export declare function getRoutesResponseBodyFromJSON(jsonString: string): SafeParseResult<GetRoutesResponseBody, SDKValidationError>;
//# sourceMappingURL=getroutesop.d.ts.map