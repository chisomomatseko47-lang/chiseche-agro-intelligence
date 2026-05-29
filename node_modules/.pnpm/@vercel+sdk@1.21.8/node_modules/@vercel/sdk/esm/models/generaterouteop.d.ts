import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type PathCondition = {
    value?: string | undefined;
    syntax?: string | undefined;
};
export type GenerateRouteConditions = {
    field?: string | undefined;
    operator?: string | undefined;
    key?: string | undefined;
    value?: string | undefined;
    missing?: boolean | undefined;
};
export type GenerateRouteHeaders = {
    key?: string | undefined;
    value?: string | undefined;
    op?: string | undefined;
};
export type Actions = {
    type?: string | undefined;
    subType?: string | undefined;
    dest?: string | undefined;
    status?: number | undefined;
    headers?: Array<GenerateRouteHeaders> | undefined;
};
export type CurrentRoute = {
    name?: string | undefined;
    description?: string | undefined;
    pathCondition: PathCondition;
    conditions?: Array<GenerateRouteConditions> | undefined;
    actions: Array<Actions>;
};
export type GenerateRouteRequestBody = {
    prompt: string;
    currentRoute?: CurrentRoute | undefined;
};
export type GenerateRouteRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: GenerateRouteRequestBody | undefined;
};
export declare const Syntax: {
    readonly Equals: "equals";
    readonly PathToRegexp: "path-to-regexp";
    readonly Regex: "regex";
};
export type Syntax = ClosedEnum<typeof Syntax>;
export type GenerateRoutePathCondition = {
    value: string;
    syntax: Syntax;
};
export declare const GenerateRouteField: {
    readonly Host: "host";
    readonly Header: "header";
    readonly Cookie: "cookie";
    readonly Query: "query";
};
export type GenerateRouteField = ClosedEnum<typeof GenerateRouteField>;
export declare const Operator: {
    readonly Contains: "contains";
    readonly Eq: "eq";
    readonly Re: "re";
    readonly Exists: "exists";
};
export type Operator = ClosedEnum<typeof Operator>;
export type GenerateRouteProjectRoutesConditions = {
    field: GenerateRouteField;
    operator: Operator;
    key?: string | undefined;
    value?: string | undefined;
    missing: boolean;
};
export declare const GenerateRouteType: {
    readonly Rewrite: "rewrite";
    readonly Redirect: "redirect";
    readonly SetStatus: "set-status";
    readonly Modify: "modify";
};
export type GenerateRouteType = ClosedEnum<typeof GenerateRouteType>;
export declare const SubType: {
    readonly ResponseHeaders: "response-headers";
    readonly TransformRequestHeader: "transform-request-header";
    readonly TransformRequestQuery: "transform-request-query";
};
export type SubType = ClosedEnum<typeof SubType>;
export declare const GenerateRouteOp: {
    readonly Append: "append";
    readonly Set: "set";
    readonly Delete: "delete";
};
export type GenerateRouteOp = ClosedEnum<typeof GenerateRouteOp>;
export type GenerateRouteProjectRoutesHeaders = {
    key: string;
    value?: string | undefined;
    op: GenerateRouteOp;
};
export type GenerateRouteActions = {
    type: GenerateRouteType;
    subType?: SubType | undefined;
    dest?: string | undefined;
    status?: number | undefined;
    headers?: Array<GenerateRouteProjectRoutesHeaders> | undefined;
};
export type GenerateRouteRoute = {
    name: string;
    description: string;
    pathCondition: GenerateRoutePathCondition;
    conditions?: Array<GenerateRouteProjectRoutesConditions> | undefined;
    actions: Array<GenerateRouteActions>;
};
export type GenerateRouteResponseBody = {
    route?: GenerateRouteRoute | undefined;
    error?: string | undefined;
};
/** @internal */
export declare const PathCondition$inboundSchema: z.ZodType<PathCondition, z.ZodTypeDef, unknown>;
/** @internal */
export type PathCondition$Outbound = {
    value?: string | undefined;
    syntax?: string | undefined;
};
/** @internal */
export declare const PathCondition$outboundSchema: z.ZodType<PathCondition$Outbound, z.ZodTypeDef, PathCondition>;
export declare function pathConditionToJSON(pathCondition: PathCondition): string;
export declare function pathConditionFromJSON(jsonString: string): SafeParseResult<PathCondition, SDKValidationError>;
/** @internal */
export declare const GenerateRouteConditions$inboundSchema: z.ZodType<GenerateRouteConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateRouteConditions$Outbound = {
    field?: string | undefined;
    operator?: string | undefined;
    key?: string | undefined;
    value?: string | undefined;
    missing?: boolean | undefined;
};
/** @internal */
export declare const GenerateRouteConditions$outboundSchema: z.ZodType<GenerateRouteConditions$Outbound, z.ZodTypeDef, GenerateRouteConditions>;
export declare function generateRouteConditionsToJSON(generateRouteConditions: GenerateRouteConditions): string;
export declare function generateRouteConditionsFromJSON(jsonString: string): SafeParseResult<GenerateRouteConditions, SDKValidationError>;
/** @internal */
export declare const GenerateRouteHeaders$inboundSchema: z.ZodType<GenerateRouteHeaders, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateRouteHeaders$Outbound = {
    key?: string | undefined;
    value?: string | undefined;
    op?: string | undefined;
};
/** @internal */
export declare const GenerateRouteHeaders$outboundSchema: z.ZodType<GenerateRouteHeaders$Outbound, z.ZodTypeDef, GenerateRouteHeaders>;
export declare function generateRouteHeadersToJSON(generateRouteHeaders: GenerateRouteHeaders): string;
export declare function generateRouteHeadersFromJSON(jsonString: string): SafeParseResult<GenerateRouteHeaders, SDKValidationError>;
/** @internal */
export declare const Actions$inboundSchema: z.ZodType<Actions, z.ZodTypeDef, unknown>;
/** @internal */
export type Actions$Outbound = {
    type?: string | undefined;
    subType?: string | undefined;
    dest?: string | undefined;
    status?: number | undefined;
    headers?: Array<GenerateRouteHeaders$Outbound> | undefined;
};
/** @internal */
export declare const Actions$outboundSchema: z.ZodType<Actions$Outbound, z.ZodTypeDef, Actions>;
export declare function actionsToJSON(actions: Actions): string;
export declare function actionsFromJSON(jsonString: string): SafeParseResult<Actions, SDKValidationError>;
/** @internal */
export declare const CurrentRoute$inboundSchema: z.ZodType<CurrentRoute, z.ZodTypeDef, unknown>;
/** @internal */
export type CurrentRoute$Outbound = {
    name?: string | undefined;
    description?: string | undefined;
    pathCondition: PathCondition$Outbound;
    conditions?: Array<GenerateRouteConditions$Outbound> | undefined;
    actions: Array<Actions$Outbound>;
};
/** @internal */
export declare const CurrentRoute$outboundSchema: z.ZodType<CurrentRoute$Outbound, z.ZodTypeDef, CurrentRoute>;
export declare function currentRouteToJSON(currentRoute: CurrentRoute): string;
export declare function currentRouteFromJSON(jsonString: string): SafeParseResult<CurrentRoute, SDKValidationError>;
/** @internal */
export declare const GenerateRouteRequestBody$inboundSchema: z.ZodType<GenerateRouteRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateRouteRequestBody$Outbound = {
    prompt: string;
    currentRoute?: CurrentRoute$Outbound | undefined;
};
/** @internal */
export declare const GenerateRouteRequestBody$outboundSchema: z.ZodType<GenerateRouteRequestBody$Outbound, z.ZodTypeDef, GenerateRouteRequestBody>;
export declare function generateRouteRequestBodyToJSON(generateRouteRequestBody: GenerateRouteRequestBody): string;
export declare function generateRouteRequestBodyFromJSON(jsonString: string): SafeParseResult<GenerateRouteRequestBody, SDKValidationError>;
/** @internal */
export declare const GenerateRouteRequest$inboundSchema: z.ZodType<GenerateRouteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateRouteRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: GenerateRouteRequestBody$Outbound | undefined;
};
/** @internal */
export declare const GenerateRouteRequest$outboundSchema: z.ZodType<GenerateRouteRequest$Outbound, z.ZodTypeDef, GenerateRouteRequest>;
export declare function generateRouteRequestToJSON(generateRouteRequest: GenerateRouteRequest): string;
export declare function generateRouteRequestFromJSON(jsonString: string): SafeParseResult<GenerateRouteRequest, SDKValidationError>;
/** @internal */
export declare const Syntax$inboundSchema: z.ZodNativeEnum<typeof Syntax>;
/** @internal */
export declare const Syntax$outboundSchema: z.ZodNativeEnum<typeof Syntax>;
/** @internal */
export declare const GenerateRoutePathCondition$inboundSchema: z.ZodType<GenerateRoutePathCondition, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateRoutePathCondition$Outbound = {
    value: string;
    syntax: string;
};
/** @internal */
export declare const GenerateRoutePathCondition$outboundSchema: z.ZodType<GenerateRoutePathCondition$Outbound, z.ZodTypeDef, GenerateRoutePathCondition>;
export declare function generateRoutePathConditionToJSON(generateRoutePathCondition: GenerateRoutePathCondition): string;
export declare function generateRoutePathConditionFromJSON(jsonString: string): SafeParseResult<GenerateRoutePathCondition, SDKValidationError>;
/** @internal */
export declare const GenerateRouteField$inboundSchema: z.ZodNativeEnum<typeof GenerateRouteField>;
/** @internal */
export declare const GenerateRouteField$outboundSchema: z.ZodNativeEnum<typeof GenerateRouteField>;
/** @internal */
export declare const Operator$inboundSchema: z.ZodNativeEnum<typeof Operator>;
/** @internal */
export declare const Operator$outboundSchema: z.ZodNativeEnum<typeof Operator>;
/** @internal */
export declare const GenerateRouteProjectRoutesConditions$inboundSchema: z.ZodType<GenerateRouteProjectRoutesConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateRouteProjectRoutesConditions$Outbound = {
    field: string;
    operator: string;
    key?: string | undefined;
    value?: string | undefined;
    missing: boolean;
};
/** @internal */
export declare const GenerateRouteProjectRoutesConditions$outboundSchema: z.ZodType<GenerateRouteProjectRoutesConditions$Outbound, z.ZodTypeDef, GenerateRouteProjectRoutesConditions>;
export declare function generateRouteProjectRoutesConditionsToJSON(generateRouteProjectRoutesConditions: GenerateRouteProjectRoutesConditions): string;
export declare function generateRouteProjectRoutesConditionsFromJSON(jsonString: string): SafeParseResult<GenerateRouteProjectRoutesConditions, SDKValidationError>;
/** @internal */
export declare const GenerateRouteType$inboundSchema: z.ZodNativeEnum<typeof GenerateRouteType>;
/** @internal */
export declare const GenerateRouteType$outboundSchema: z.ZodNativeEnum<typeof GenerateRouteType>;
/** @internal */
export declare const SubType$inboundSchema: z.ZodNativeEnum<typeof SubType>;
/** @internal */
export declare const SubType$outboundSchema: z.ZodNativeEnum<typeof SubType>;
/** @internal */
export declare const GenerateRouteOp$inboundSchema: z.ZodNativeEnum<typeof GenerateRouteOp>;
/** @internal */
export declare const GenerateRouteOp$outboundSchema: z.ZodNativeEnum<typeof GenerateRouteOp>;
/** @internal */
export declare const GenerateRouteProjectRoutesHeaders$inboundSchema: z.ZodType<GenerateRouteProjectRoutesHeaders, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateRouteProjectRoutesHeaders$Outbound = {
    key: string;
    value?: string | undefined;
    op: string;
};
/** @internal */
export declare const GenerateRouteProjectRoutesHeaders$outboundSchema: z.ZodType<GenerateRouteProjectRoutesHeaders$Outbound, z.ZodTypeDef, GenerateRouteProjectRoutesHeaders>;
export declare function generateRouteProjectRoutesHeadersToJSON(generateRouteProjectRoutesHeaders: GenerateRouteProjectRoutesHeaders): string;
export declare function generateRouteProjectRoutesHeadersFromJSON(jsonString: string): SafeParseResult<GenerateRouteProjectRoutesHeaders, SDKValidationError>;
/** @internal */
export declare const GenerateRouteActions$inboundSchema: z.ZodType<GenerateRouteActions, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateRouteActions$Outbound = {
    type: string;
    subType?: string | undefined;
    dest?: string | undefined;
    status?: number | undefined;
    headers?: Array<GenerateRouteProjectRoutesHeaders$Outbound> | undefined;
};
/** @internal */
export declare const GenerateRouteActions$outboundSchema: z.ZodType<GenerateRouteActions$Outbound, z.ZodTypeDef, GenerateRouteActions>;
export declare function generateRouteActionsToJSON(generateRouteActions: GenerateRouteActions): string;
export declare function generateRouteActionsFromJSON(jsonString: string): SafeParseResult<GenerateRouteActions, SDKValidationError>;
/** @internal */
export declare const GenerateRouteRoute$inboundSchema: z.ZodType<GenerateRouteRoute, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateRouteRoute$Outbound = {
    name: string;
    description: string;
    pathCondition: GenerateRoutePathCondition$Outbound;
    conditions?: Array<GenerateRouteProjectRoutesConditions$Outbound> | undefined;
    actions: Array<GenerateRouteActions$Outbound>;
};
/** @internal */
export declare const GenerateRouteRoute$outboundSchema: z.ZodType<GenerateRouteRoute$Outbound, z.ZodTypeDef, GenerateRouteRoute>;
export declare function generateRouteRouteToJSON(generateRouteRoute: GenerateRouteRoute): string;
export declare function generateRouteRouteFromJSON(jsonString: string): SafeParseResult<GenerateRouteRoute, SDKValidationError>;
/** @internal */
export declare const GenerateRouteResponseBody$inboundSchema: z.ZodType<GenerateRouteResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateRouteResponseBody$Outbound = {
    route?: GenerateRouteRoute$Outbound | undefined;
    error?: string | undefined;
};
/** @internal */
export declare const GenerateRouteResponseBody$outboundSchema: z.ZodType<GenerateRouteResponseBody$Outbound, z.ZodTypeDef, GenerateRouteResponseBody>;
export declare function generateRouteResponseBodyToJSON(generateRouteResponseBody: GenerateRouteResponseBody): string;
export declare function generateRouteResponseBodyFromJSON(jsonString: string): SafeParseResult<GenerateRouteResponseBody, SDKValidationError>;
//# sourceMappingURL=generaterouteop.d.ts.map