import { Roles } from 'generated/prisma';
export declare const Auth: (...roles: Roles[]) => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
