export namespace github {
	
	export class GistFile {
	    size?: number;
	    filename?: string;
	    language?: string;
	    type?: string;
	    raw_url?: string;
	    content?: string;
	
	    static createFrom(source: any = {}) {
	        return new GistFile(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.size = source["size"];
	        this.filename = source["filename"];
	        this.language = source["language"];
	        this.type = source["type"];
	        this.raw_url = source["raw_url"];
	        this.content = source["content"];
	    }
	}
	export class Match {
	    text?: string;
	    indices?: number[];
	
	    static createFrom(source: any = {}) {
	        return new Match(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.text = source["text"];
	        this.indices = source["indices"];
	    }
	}
	export class TextMatch {
	    object_url?: string;
	    object_type?: string;
	    property?: string;
	    fragment?: string;
	    matches?: Match[];
	
	    static createFrom(source: any = {}) {
	        return new TextMatch(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.object_url = source["object_url"];
	        this.object_type = source["object_type"];
	        this.property = source["property"];
	        this.fragment = source["fragment"];
	        this.matches = this.convertValues(source["matches"], Match);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Plan {
	    name?: string;
	    space?: number;
	    collaborators?: number;
	    private_repos?: number;
	    filled_seats?: number;
	    seats?: number;
	
	    static createFrom(source: any = {}) {
	        return new Plan(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.space = source["space"];
	        this.collaborators = source["collaborators"];
	        this.private_repos = source["private_repos"];
	        this.filled_seats = source["filled_seats"];
	        this.seats = source["seats"];
	    }
	}
	export class User {
	    login?: string;
	    id?: number;
	    node_id?: string;
	    avatar_url?: string;
	    html_url?: string;
	    gravatar_id?: string;
	    name?: string;
	    company?: string;
	    blog?: string;
	    location?: string;
	    email?: string;
	    hireable?: boolean;
	    bio?: string;
	    twitter_username?: string;
	    public_repos?: number;
	    public_gists?: number;
	    followers?: number;
	    following?: number;
	    // Go type: Timestamp
	    created_at?: any;
	    // Go type: Timestamp
	    updated_at?: any;
	    // Go type: Timestamp
	    suspended_at?: any;
	    type?: string;
	    site_admin?: boolean;
	    total_private_repos?: number;
	    owned_private_repos?: number;
	    private_gists?: number;
	    disk_usage?: number;
	    collaborators?: number;
	    two_factor_authentication?: boolean;
	    plan?: Plan;
	    ldap_dn?: string;
	    url?: string;
	    events_url?: string;
	    following_url?: string;
	    followers_url?: string;
	    gists_url?: string;
	    organizations_url?: string;
	    received_events_url?: string;
	    repos_url?: string;
	    starred_url?: string;
	    subscriptions_url?: string;
	    text_matches?: TextMatch[];
	    permissions?: {[key: string]: boolean};
	    role_name?: string;
	
	    static createFrom(source: any = {}) {
	        return new User(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.login = source["login"];
	        this.id = source["id"];
	        this.node_id = source["node_id"];
	        this.avatar_url = source["avatar_url"];
	        this.html_url = source["html_url"];
	        this.gravatar_id = source["gravatar_id"];
	        this.name = source["name"];
	        this.company = source["company"];
	        this.blog = source["blog"];
	        this.location = source["location"];
	        this.email = source["email"];
	        this.hireable = source["hireable"];
	        this.bio = source["bio"];
	        this.twitter_username = source["twitter_username"];
	        this.public_repos = source["public_repos"];
	        this.public_gists = source["public_gists"];
	        this.followers = source["followers"];
	        this.following = source["following"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.suspended_at = this.convertValues(source["suspended_at"], null);
	        this.type = source["type"];
	        this.site_admin = source["site_admin"];
	        this.total_private_repos = source["total_private_repos"];
	        this.owned_private_repos = source["owned_private_repos"];
	        this.private_gists = source["private_gists"];
	        this.disk_usage = source["disk_usage"];
	        this.collaborators = source["collaborators"];
	        this.two_factor_authentication = source["two_factor_authentication"];
	        this.plan = this.convertValues(source["plan"], Plan);
	        this.ldap_dn = source["ldap_dn"];
	        this.url = source["url"];
	        this.events_url = source["events_url"];
	        this.following_url = source["following_url"];
	        this.followers_url = source["followers_url"];
	        this.gists_url = source["gists_url"];
	        this.organizations_url = source["organizations_url"];
	        this.received_events_url = source["received_events_url"];
	        this.repos_url = source["repos_url"];
	        this.starred_url = source["starred_url"];
	        this.subscriptions_url = source["subscriptions_url"];
	        this.text_matches = this.convertValues(source["text_matches"], TextMatch);
	        this.permissions = source["permissions"];
	        this.role_name = source["role_name"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Gist {
	    id?: string;
	    description?: string;
	    public?: boolean;
	    owner?: User;
	    files?: {[key: string]: GistFile};
	    comments?: number;
	    html_url?: string;
	    git_pull_url?: string;
	    git_push_url?: string;
	    // Go type: Timestamp
	    created_at?: any;
	    // Go type: Timestamp
	    updated_at?: any;
	    node_id?: string;
	
	    static createFrom(source: any = {}) {
	        return new Gist(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.description = source["description"];
	        this.public = source["public"];
	        this.owner = this.convertValues(source["owner"], User);
	        this.files = this.convertValues(source["files"], GistFile, true);
	        this.comments = source["comments"];
	        this.html_url = source["html_url"];
	        this.git_pull_url = source["git_pull_url"];
	        this.git_push_url = source["git_push_url"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.node_id = source["node_id"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	

}

