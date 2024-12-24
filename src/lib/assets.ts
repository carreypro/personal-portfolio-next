export type AssetType = 'logo' | 'icon' | 'favicon' | 'avatar';

export interface Asset {
  id: string;
  type: AssetType;
  path: string;
  alt?: string;
  width?: number;
  height?: number;
}

// 资源注册表
const assetRegistry: Record<string, Asset> = {
  'netease-logo': {
    id: 'netease-logo',
    type: 'logo',
    path: '/static/images/logos/netease.svg',
    alt: '网易',
    width: 48,
    height: 48
  },
  'sfa-logo': {
    id: 'sfa-logo',
    type: 'logo',
    path: '/static/images/logos/sfa.svg',
    alt: '川影',
    width: 48,
    height: 48
  },
  'avatar': {
    id: 'avatar',
    type: 'avatar',
    path: '/static/images/avatar.jpg',
    alt: 'Avatar',
    width: 90,
    height: 90
  },
  'favicon': {
    id: 'favicon',
    type: 'favicon',
    path: '/static/favicons/favicon.ico',
    width: 32,
    height: 32
  }
};

// 获取资源
export function getAsset(id: string): Asset {
  const asset = assetRegistry[id];
  if (!asset) {
    throw new Error(`Asset not found: ${id}`);
  }
  return asset;
}

// 获取资源路径
export function getAssetPath(id: string): string {
  return getAsset(id).path;
}

// 验证资源是否存在
export function validateAsset(id: string): boolean {
  return id in assetRegistry;
}

// 获取特定类型的所有资源
export function getAssetsByType(type: AssetType): Asset[] {
  return Object.values(assetRegistry).filter(asset => asset.type === type);
}

// 导出所有资源ID的类型
export type AssetId = keyof typeof assetRegistry;
