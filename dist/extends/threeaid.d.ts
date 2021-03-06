import { IGeometryBuffer } from '../render/mesh';
import { Vec3 } from '../math/Vec3';
import { Vec2 } from '../math/Vec2';
import { IExtrudeOptions } from '../alg/extrude';
import { Polyline } from '../struct/3d/PolyLine';
import { Polygon } from '../struct/3d/Polygon';
export declare function toGeometryBuffer(vertices: number[] | Vec3[], triangles: number[], uvs?: Vec2[] | number[]): IGeometryBuffer;
/**
 * shape 挤压后转几何体
 * @param {*} shape
 * @param {*} arg_path
 * @param {*} options
 */
export declare function extrudeToGeometryBuffer(shape: Polygon | Polyline | Array<Vec3>, arg_path: Array<Vec3> | any, options: IExtrudeOptions): IGeometryBuffer;
/**
 * 两个轮廓缝合
 * @param {*} shape
 * @param {*} arg_path
 * @param {*} options
 * @param {*} material
 */
export declare function linkToGeometry(shape: Polygon | Polyline | Array<Vec3>, shape1: Polygon | Polyline | Array<Vec3>, isClose?: boolean): IGeometryBuffer;
/**
 * 多个轮廓缝合
 * @param shape
 * @param isClose
 * @param material
 */
export declare function linksToGeometry(shape: (Polygon | Polyline | Array<Vec3>)[], isClose?: boolean): IGeometryBuffer;
/**
 * 三角剖分后转成几何体
 * 只考虑XY平面
 * @param {*} boundary
 * @param {*} hole
 * @param {*} options
 */
export declare function trianglutionToGeometryBuffer(boundary: any, holes?: any[], options?: any): IGeometryBuffer;
