import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { AddRouteRequest, AddRouteResponseBody } from "../models/addrouteop.js";
import { DeleteRoutesRequest, DeleteRoutesResponseBody } from "../models/deleteroutesop.js";
import { EditRouteRequest, EditRouteResponseBody } from "../models/editrouteop.js";
import { GenerateRouteRequest, GenerateRouteResponseBody } from "../models/generaterouteop.js";
import { GetRoutesRequest, GetRoutesResponseBody } from "../models/getroutesop.js";
import { GetRouteVersionsRequest, GetRouteVersionsResponseBody } from "../models/getrouteversionsop.js";
import { StageRoutesRequest, StageRoutesResponseBody } from "../models/stageroutesop.js";
import { UpdateRouteVersionsRequest, UpdateRouteVersionsResponseBody } from "../models/updaterouteversionsop.js";
export declare class ProjectRoutes extends ClientSDK {
    /**
     * Get project routing rules
     *
     * @remarks
     * Get the routing rules for a project. Supports searching by name/ID/pattern, filtering by route type, and diffing staged changes against production.
     */
    getRoutes(request: GetRoutesRequest, options?: RequestOptions): Promise<GetRoutesResponseBody>;
    /**
     * Stage routing rules
     *
     * @remarks
     * Stage routing rules for a project. Set `overwrite` to true to replace all existing rules, or omit it to merge with existing rules by ID. Returns the new staged version.
     */
    stageRoutes(request: StageRoutesRequest, options?: RequestOptions): Promise<StageRoutesResponseBody>;
    /**
     * Add a routing rule
     *
     * @remarks
     * Add a single routing rule to a project at a specified position. Defaults to the end of the list if no position is provided. The route is enabled by default. Stages a new version with the added route.
     */
    addRoute(request: AddRouteRequest, options?: RequestOptions): Promise<AddRouteResponseBody>;
    /**
     * Delete routing rules
     *
     * @remarks
     * Delete one or more routing rules from a project by ID. Stages a new version with the routes removed.
     */
    deleteRoutes(request: DeleteRoutesRequest, options?: RequestOptions): Promise<DeleteRoutesResponseBody>;
    /**
     * Edit a routing rule
     *
     * @remarks
     * Replace a routing rule identified by its ID, or restore it from the current production version. Stages a new version with the modified route.
     */
    editRoute(request: EditRouteRequest, options?: RequestOptions): Promise<EditRouteResponseBody>;
    /**
     * Generate a routing rule from natural language
     *
     * @remarks
     * Generate a routing rule configuration from a natural language description. Returns a suggested route configuration that can be reviewed and saved.
     */
    generateRoute(request: GenerateRouteRequest, options?: RequestOptions): Promise<GenerateRouteResponseBody>;
    /**
     * Get routing rule version history
     *
     * @remarks
     * Get the version history for a project's routing rules. Returns the staging version (if one exists) followed by production versions, most recent first. The staging version has `isStaging: true` and the current production version has `isLive: true`.
     */
    getRouteVersions(request: GetRouteVersionsRequest, options?: RequestOptions): Promise<GetRouteVersionsResponseBody>;
    /**
     * Promote, restore, or discard a routing rule version
     *
     * @remarks
     * Promote staged routing rules to production, restore a previous production version, or discard staged changes. - `promote`: Publishes the staging version to production. - `restore`: Rolls back to a previous production version. - `discard`: Removes the staging version without publishing.
     */
    updateRouteVersions(request: UpdateRouteVersionsRequest, options?: RequestOptions): Promise<UpdateRouteVersionsResponseBody>;
}
//# sourceMappingURL=projectroutes.d.ts.map