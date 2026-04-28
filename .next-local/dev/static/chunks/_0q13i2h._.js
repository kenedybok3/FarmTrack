(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://hnylgsfxcmngjocaflah.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhueWxnc2Z4Y21uZ2pvY2FmbGFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDAxMjQsImV4cCI6MjA5MDcxNjEyNH0.lgC2DMAaxmfW5gRvvvhpC0kfrGRmKTAlCc0LG-330Og");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/farmers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFarmer",
    ()=>createFarmer,
    "getAllFarmers",
    ()=>getAllFarmers,
    "getFarmerByEmail",
    ()=>getFarmerByEmail,
    "getFarmerById",
    ()=>getFarmerById,
    "getFarmerByPhone",
    ()=>getFarmerByPhone,
    "updateFarmer",
    ()=>updateFarmer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createFarmer(farmerData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').insert([
        farmerData
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getFarmerByPhone(phone) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').select('*').eq('phone', phone).single();
    if (error && error.code !== 'PGRST116') throw error;
    return data;
}
async function getFarmerByEmail(email) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').select('*').eq('email', email).single();
    if (error && error.code !== 'PGRST116') throw error;
    return data;
}
async function getFarmerById(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
}
async function updateFarmer(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function getAllFarmers() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').select('*');
    if (error) throw error;
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/farmers.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useAuth() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        user: null,
        loading: true,
        error: null
    });
    const checkSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[checkSession]": async ()=>{
            try {
                const { data: { session }, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (error) {
                    console.error('checkSession session check failed:', error);
                }
                if (session?.user?.email) {
                    let farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmerByEmail"])(session.user.email);
                    if (!farmer) {
                        farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFarmer"])({
                            email: session.user.email,
                            phone: '+2340000000000',
                            name: 'User',
                            farm_type: 'Poultry'
                        });
                    }
                    if (farmer?.id) {
                        localStorage.setItem('farmer_id', farmer.id);
                    }
                    setState({
                        user: farmer,
                        loading: false,
                        error: null
                    });
                    return;
                }
                const storedFarmerId = localStorage.getItem('farmer_id');
                if (storedFarmerId) {
                    const farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmerById"])(storedFarmerId);
                    if (farmer) {
                        setState({
                            user: farmer,
                            loading: false,
                            error: null
                        });
                        return;
                    }
                }
                setState({
                    user: null,
                    loading: false,
                    error: null
                });
            } catch (err) {
                console.error('checkSession error:', err);
                const storedFarmerId = localStorage.getItem('farmer_id');
                if (storedFarmerId) {
                    const farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmerById"])(storedFarmerId);
                    if (farmer) {
                        setState({
                            user: farmer,
                            loading: false,
                            error: null
                        });
                        return;
                    }
                }
                setState({
                    user: null,
                    loading: false,
                    error: null
                });
            }
        }
    }["useAuth.useCallback[checkSession]"], []);
    // useEffect(() => {
    //   checkSession()
    //   const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
    //     if (event === 'SIGNED_IN') {
    //       await checkSession()
    //     } else if (event === 'SIGNED_OUT') {
    //       setState({ user: null, loading: false, error: null })
    //       localStorage.removeItem('farmer_id')
    //     }
    //   })
    //   return () => subscription.unsubscribe()
    // }, [checkSession])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            checkSession();
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "useAuth.useEffect": async (event, session)=>{
                    if (event === "SIGNED_IN") {
                        await checkSession();
                    } else if (event === "SIGNED_OUT") {
                        localStorage.removeItem("farmer_id");
                        setState({
                            user: null,
                            loading: false,
                            error: null
                        });
                    }
                }
            }["useAuth.useEffect"]);
            return ({
                "useAuth.useEffect": ()=>subscription.unsubscribe()
            })["useAuth.useEffect"];
        }
    }["useAuth.useEffect"], [
        checkSession
    ]);
    const completeLogin = async (farmer)=>{
        try {
            if (!farmer?.id) {
                throw new Error('Invalid farmer data received from login');
            }
            localStorage.setItem('farmer_id', farmer.id);
            setState((prev)=>({
                    ...prev,
                    user: farmer,
                    loading: false,
                    error: null
                }));
            return {
                success: true
            };
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unexpected login error';
            console.error('Login completion failed:', error);
            setState((prev)=>({
                    ...prev,
                    user: null,
                    loading: false,
                    error: message
                }));
            return {
                success: false,
                error: message
            };
        }
    };
    const login = async (email, password)=>{
        setState((prev)=>({
                ...prev,
                error: null,
                loading: true
            }));
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                console.error('Auth signIn error:', error);
                throw error;
            }
            console.log('Auth success, user:', data?.user);
            let farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmerByEmail"])(email);
            console.log('Farmer by email:', farmer);
            if (!farmer) {
                farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFarmer"])({
                    email: email,
                    phone: '+2340000000000',
                    name: 'User',
                    farm_type: 'Poultry'
                });
            }
            return await completeLogin(farmer);
        } catch (err) {
            console.error('Login error:', err);
            const message = err instanceof Error ? err.message : 'Login failed';
            setState((prev)=>({
                    ...prev,
                    loading: false,
                    error: message
                }));
            return {
                success: false,
                error: message
            };
        }
    };
    const completeRegistration = async (farmer)=>{
        try {
            if (!farmer?.id) {
                throw new Error('Invalid farmer data received from registration');
            }
            localStorage.setItem('farmer_id', farmer.id);
            setState((prev)=>({
                    ...prev,
                    user: farmer,
                    loading: false,
                    error: null
                }));
            return {
                success: true
            };
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unexpected registration error';
            console.error('Registration completion failed:', error);
            setState((prev)=>({
                    ...prev,
                    user: null,
                    loading: false,
                    error: message
                }));
            return {
                success: false,
                error: message
            };
        }
    };
    const register = async (email, name, phone, password, farmType = 'Poultry')=>{
        setState((prev)=>({
                ...prev,
                error: null,
                loading: true
            }));
        try {
            const { error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
                email,
                password
            });
            if (authError) {
                if (authError.message?.includes('User already registered') || authError.code === 'user_already_exists') {
                    const { error: signInError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                        email,
                        password
                    });
                    if (signInError) {
                        throw new Error('Account exists. Please try logging in or reset your password.');
                    }
                } else {
                    console.error('Auth signup error:', authError);
                    throw authError;
                }
            }
            const farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFarmer"])({
                email: email,
                phone: phone,
                name,
                full_name: name,
                farm_type: farmType
            });
            return await completeRegistration(farmer);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Registration failed';
            setState((prev)=>({
                    ...prev,
                    loading: false,
                    error: message
                }));
            return {
                success: false,
                error: message
            };
        }
    };
    const logout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            localStorage.removeItem('farmer_id');
            setState({
                user: null,
                loading: false,
                error: null
            });
        } catch (err) {
            console.error('Logout error:', err);
        }
    };
    const getStoredFarmerId = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return localStorage.getItem('farmer_id');
    };
    return {
        user: state.user,
        loading: state.loading,
        error: state.error,
        login,
        register,
        logout,
        getStoredFarmerId,
        checkSession
    };
}
_s(useAuth, "11JEDJm16Ef/PNgorY/LYiZSHm4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/daily-records.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDailyRecord",
    ()=>createDailyRecord,
    "deleteDailyRecord",
    ()=>deleteDailyRecord,
    "getDailyRecords",
    ()=>getDailyRecords,
    "getFarmStats",
    ()=>getFarmStats,
    "getLatestDailyRecord",
    ()=>getLatestDailyRecord,
    "getRecordsByDateRange",
    ()=>getRecordsByDateRange,
    "updateDailyRecord",
    ()=>updateDailyRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createDailyRecord(record) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').insert([
        record
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getDailyRecords(farmerId, limit = 30) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').select('*').eq('farmer_id', farmerId).order('record_date', {
        ascending: false
    }).limit(limit);
    if (error) throw error;
    return data;
}
async function getLatestDailyRecord(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').select('*').eq('farmer_id', farmerId).order('created_at', {
        ascending: false
    }).limit(1).single();
    if (error && error.code !== 'PGRST116') throw error;
    return data;
}
async function updateDailyRecord(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function deleteDailyRecord(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').delete().eq('id', id);
    if (error) throw error;
}
async function getFarmStats(farmerId) {
    const records = await getDailyRecords(farmerId, 100);
    const totalSales = records.reduce((sum, r)=>sum + (r.sales_amount || 0), 0);
    const totalMortality = records.reduce((sum, r)=>sum + (r.mortality_count || 0), 0);
    const totalProduction = records.reduce((sum, r)=>sum + (r.production_amt || 0), 0);
    const totalFeedCost = records.reduce((sum, r)=>sum + (r.feed_cost || 0), 0);
    return {
        totalSales,
        totalMortality,
        avgProduction: records.length > 0 ? totalProduction / records.length : 0,
        totalFeedCost
    };
}
async function getRecordsByDateRange(farmerId, startDate, endDate) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').select('*').eq('farmer_id', farmerId).gte('record_date', startDate).lte('record_date', endDate).order('record_date', {
        ascending: true
    });
    if (error) throw error;
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/health-logs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHealthLog",
    ()=>createHealthLog,
    "deleteHealthLog",
    ()=>deleteHealthLog,
    "getHealthLogs",
    ()=>getHealthLogs,
    "updateHealthLog",
    ()=>updateHealthLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createHealthLog(log) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_logs').insert([
        log
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getHealthLogs(farmerId, limit = 50) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_logs').select('*').eq('farmer_id', farmerId).order('record_date', {
        ascending: false
    }).limit(limit);
    if (error) throw error;
    return data;
}
async function updateHealthLog(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_logs').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function deleteHealthLog(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_logs').delete().eq('id', id);
    if (error) throw error;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/expenses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createExpense",
    ()=>createExpense,
    "deleteExpense",
    ()=>deleteExpense,
    "getExpenses",
    ()=>getExpenses,
    "getExpensesByCategory",
    ()=>getExpensesByCategory,
    "getTotalExpenses",
    ()=>getTotalExpenses,
    "updateExpense",
    ()=>updateExpense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createExpense(expense) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').insert([
        expense
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getExpenses(farmerId, limit = 50) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').select('*').eq('farmer_id', farmerId).order('expense_date', {
        ascending: false
    }).limit(limit);
    if (error) throw error;
    return data;
}
async function updateExpense(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function deleteExpense(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').delete().eq('id', id);
    if (error) throw error;
}
async function getExpensesByCategory(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').select('category, amount').eq('farmer_id', farmerId);
    if (error) throw error;
    const categoryTotals = {};
    data.forEach((exp)=>{
        categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
    });
    return categoryTotals;
}
async function getTotalExpenses(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').select('amount').eq('farmer_id', farmerId);
    if (error) throw error;
    return data.reduce((sum, exp)=>sum + exp.amount, 0);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/batches.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBatch",
    ()=>createBatch,
    "deleteBatch",
    ()=>deleteBatch,
    "getBatchById",
    ()=>getBatchById,
    "getBatches",
    ()=>getBatches,
    "updateBatch",
    ()=>updateBatch,
    "updateBatchCount",
    ()=>updateBatchCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createBatch(batch) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('batches').insert([
        {
            ...batch,
            current_count: batch.initial_count
        }
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getBatches(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('batches').select('*').eq('farmer_id', farmerId).order('acquired_date', {
        ascending: false
    });
    if (error) throw error;
    return data;
}
async function getBatchById(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('batches').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
}
async function updateBatch(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('batches').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function deleteBatch(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('batches').delete().eq('id', id);
    if (error) throw error;
}
async function updateBatchCount(id, newCount) {
    return updateBatch(id, {
        current_count: newCount
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/inventory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createInventoryItem",
    ()=>createInventoryItem,
    "deleteInventoryItem",
    ()=>deleteInventoryItem,
    "getInventory",
    ()=>getInventory,
    "getInventoryItem",
    ()=>getInventoryItem,
    "getLowStockItems",
    ()=>getLowStockItems,
    "updateInventoryItem",
    ()=>updateInventoryItem,
    "updateInventoryQuantity",
    ()=>updateInventoryQuantity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createInventoryItem(item) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('inventory').insert([
        item
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getInventory(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('inventory').select('*').eq('farmer_id', farmerId).order('item_name', {
        ascending: true
    });
    if (error) throw error;
    return data;
}
async function getInventoryItem(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('inventory').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
}
async function updateInventoryItem(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('inventory').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function deleteInventoryItem(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('inventory').delete().eq('id', id);
    if (error) throw error;
}
async function getLowStockItems(farmerId) {
    const inventory = await getInventory(farmerId);
    return inventory.filter((item)=>item.reorder_level && item.quantity <= item.reorder_level);
}
async function updateInventoryQuantity(id, quantity) {
    return updateInventoryItem(id, {
        quantity
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useFarmData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFarmData",
    ()=>useFarmData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/daily-records.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/health-logs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/expenses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/batches.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/inventory.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function useFarmData(farmerId) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        records: [],
        healthLogs: [],
        expenses: [],
        batches: [],
        inventory: [],
        stats: null,
        totalExpenses: 0,
        loading: false,
        error: null
    });
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFarmData.useCallback[refresh]": async ()=>{
            if (!farmerId) return;
            setState({
                "useFarmData.useCallback[refresh]": (prev)=>({
                        ...prev,
                        loading: true,
                        error: null
                    })
            }["useFarmData.useCallback[refresh]"]);
            try {
                const [records, healthLogs, expenses, batches, inventory, stats, totalExpenses] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDailyRecords"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHealthLogs"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpenses"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBatches"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInventory"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmStats"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalExpenses"])(farmerId)
                ]);
                setState({
                    records,
                    healthLogs,
                    expenses,
                    batches,
                    inventory,
                    stats,
                    totalExpenses,
                    loading: false,
                    error: null
                });
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Failed to fetch farm data';
                setState({
                    "useFarmData.useCallback[refresh]": (prev)=>({
                            ...prev,
                            loading: false,
                            error: message
                        })
                }["useFarmData.useCallback[refresh]"]);
            }
        }
    }["useFarmData.useCallback[refresh]"], [
        farmerId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFarmData.useEffect": ()=>{
            if (!farmerId) return;
            let cancelled = false;
            const loadData = {
                "useFarmData.useEffect.loadData": async ()=>{
                    setState({
                        "useFarmData.useEffect.loadData": (prev)=>({
                                ...prev,
                                loading: true,
                                error: null
                            })
                    }["useFarmData.useEffect.loadData"]);
                    try {
                        const [records, healthLogs, expenses, batches, inventory, stats, totalExpenses] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDailyRecords"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHealthLogs"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpenses"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBatches"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInventory"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmStats"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalExpenses"])(farmerId)
                        ]);
                        if (!cancelled) {
                            setState({
                                records,
                                healthLogs,
                                expenses,
                                batches,
                                inventory,
                                stats,
                                totalExpenses,
                                loading: false,
                                error: null
                            });
                        }
                    } catch (err) {
                        if (!cancelled) {
                            const message = err instanceof Error ? err.message : 'Failed to fetch farm data';
                            setState({
                                "useFarmData.useEffect.loadData": (prev)=>({
                                        ...prev,
                                        loading: false,
                                        error: message
                                    })
                            }["useFarmData.useEffect.loadData"]);
                        }
                    }
                }
            }["useFarmData.useEffect.loadData"];
            loadData();
            return ({
                "useFarmData.useEffect": ()=>{
                    cancelled = true;
                }
            })["useFarmData.useEffect"];
        }
    }["useFarmData.useEffect"], [
        farmerId
    ]);
    const addRecord = async (record)=>{
        if (!farmerId) return {
            success: false,
            error: 'No farmer ID'
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDailyRecord"])({
                ...record,
                farmer_id: farmerId
            });
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const removeRecord = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDailyRecord"])(id);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const addHealthLog = async (log)=>{
        if (!farmerId) return {
            success: false,
            error: 'No farmer ID'
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHealthLog"])({
                ...log,
                farmer_id: farmerId
            });
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const removeHealthLog = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteHealthLog"])(id);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const addExpense = async (expense)=>{
        if (!farmerId) return {
            success: false,
            error: 'No farmer ID'
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createExpense"])({
                ...expense,
                farmer_id: farmerId
            });
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const removeExpense = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteExpense"])(id);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const addBatch = async (batch)=>{
        if (!farmerId) return {
            success: false,
            error: 'No farmer ID'
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBatch"])({
                ...batch,
                farmer_id: farmerId
            });
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const updateBatch = async (id, newCount)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateBatchCount"])(id, newCount);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const removeBatch = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteBatch"])(id);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const addInventoryItem = async (item)=>{
        if (!farmerId) return {
            success: false,
            error: 'No farmer ID'
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInventoryItem"])({
                ...item,
                farmer_id: farmerId
            });
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const updateInventory = async (id, quantity)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateInventoryQuantity"])(id, quantity);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const removeInventoryItem = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteInventoryItem"])(id);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    return {
        ...state,
        refresh,
        addRecord,
        removeRecord,
        addHealthLog,
        removeHealthLog,
        addExpense,
        removeExpense,
        addBatch,
        updateBatch,
        removeBatch,
        addInventoryItem,
        updateInventory,
        removeInventoryItem
    };
}
_s(useFarmData, "EcgSqiqr0kos3ceFfx1a84d8znU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const variants = {
    primary: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-emerald-500/20',
    secondary: 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 border border-slate-600/30',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white',
    ghost: 'hover:bg-slate-800/50 text-slate-300',
    outline: 'bg-transparent border border-slate-600/50 hover:border-slate-500 hover:bg-slate-800/30 text-slate-300'
};
const sizes = {
    sm: 'px-3 py-2 text-sm rounded-lg',
    md: 'px-4 py-3 text-base rounded-xl',
    lg: 'px-6 py-4 text-lg rounded-xl'
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className = '', variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: `
          font-semibold transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          active:scale-[0.98]
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `,
        disabled: disabled || loading,
        ...props,
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin h-4 w-4",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Button.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12s5.373 12 12 12 8-8 8-8V0z"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Button.tsx",
                            lineNumber: 45,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/Button.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                "Processing..."
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 42,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)) : children
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 28,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className = '', label, error, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-xs text-slate-400 font-medium ml-1 mb-1.5 block",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/Input.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                className: `
            w-full p-4 rounded-xl
            bg-slate-800/40 backdrop-blur-sm
            border border-slate-700/50
            text-white placeholder-slate-500
            transition-all duration-200
            focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}
            ${className}
          `,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/Input.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-red-400 ml-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/ui/Input.tsx",
                lineNumber: 35,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Input.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = 'Input';
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmModal",
    ()=>ConfirmModal,
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Modal({ isOpen, onClose, title, children }) {
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const handleEscape = {
                "Modal.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["Modal.useEffect.handleEscape"];
            if (isOpen) {
                document.addEventListener('keydown', handleEscape);
                document.body.style.overflow = 'hidden';
            }
            return ({
                "Modal.useEffect": ()=>{
                    document.removeEventListener('keydown', handleEscape);
                    document.body.style.overflow = '';
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in",
        onClick: (e)=>{
            if (e.target === overlayRef.current) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-white mb-4",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/ui/Modal.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Modal.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/Modal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Modal, "rmj6vZ+Vy6O1wOWphXugz2fiTMw=");
_c = Modal;
function ConfirmModal({ isOpen, onClose, onConfirm, title, message, confirmLabel = 'Confirm', cancelLabel = 'Cancel', variant = 'danger', loading = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
        isOpen: isOpen,
        onClose: onClose,
        title: title,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300 mb-6",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/ui/Modal.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        disabled: loading,
                        className: "flex-1 py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors",
                        children: cancelLabel
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Modal.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onConfirm,
                        disabled: loading,
                        className: `flex-1 py-3 px-4 font-semibold rounded-xl transition-colors ${variant === 'danger' ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-yellow-600 hover:bg-yellow-500 text-white'}`,
                        children: loading ? 'Processing...' : confirmLabel
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Modal.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/Modal.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Modal.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c1 = ConfirmModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "Modal");
__turbopack_context__.k.register(_c1, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/batches/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BatchesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFarmData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useFarmData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useToast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function BatchesPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, loading: authLoading, getStoredFarmerId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { success, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const farmerId = user?.id || getStoredFarmerId();
    const { batches, loading, addBatch, updateBatch, removeBatch, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFarmData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFarmData"])(farmerId);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteId, setDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newBatch, setNewBatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        batch_name: "",
        animal_type: "Poultry",
        initial_count: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BatchesPage.useEffect": ()=>{
            if (!authLoading && !user) {
                router.push("/login");
            }
        }
    }["BatchesPage.useEffect"], [
        authLoading,
        user,
        router
    ]);
    const handleAddBatch = async ()=>{
        if (!newBatch.batch_name || !newBatch.initial_count) return;
        const result = await addBatch({
            batch_name: newBatch.batch_name,
            animal_type: newBatch.animal_type,
            initial_count: parseInt(newBatch.initial_count),
            acquired_date: new Date().toISOString().split('T')[0]
        });
        if (result.success) {
            success('Batch added successfully!');
            setNewBatch({
                batch_name: "",
                animal_type: "Poultry",
                initial_count: ""
            });
            setShowForm(false);
        } else {
            error(result.error || 'Failed to add batch');
        }
    };
    const handleUpdateCount = async (id, newCount)=>{
        await updateBatch(id, newCount);
    };
    const handleDelete = async ()=>{
        if (!deleteId) return;
        setDeleting(true);
        const result = await removeBatch(deleteId);
        setDeleting(false);
        setDeleteId(null);
        if (result.success) {
            success('Batch deleted successfully');
        } else {
            error(result.error || 'Failed to delete batch');
        }
    };
    if (authLoading || loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#050505] text-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/batches/page.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/batches/page.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#050505] text-white p-5 pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-extrabold tracking-tighter text-green-500",
                                children: "FarmPulse"
                            }, void 0, false, {
                                fileName: "[project]/app/batches/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-xs font-medium uppercase",
                                children: "Batches"
                            }, void 0, false, {
                                fileName: "[project]/app/batches/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/batches/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>router.push("/dashboard"),
                        variant: "outline",
                        size: "sm",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/app/batches/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/batches/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>setShowForm(!showForm),
                className: "w-full mb-6",
                children: showForm ? "Cancel" : "+ Add New Batch"
            }, void 0, false, {
                fileName: "[project]/app/batches/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900/20 p-4 rounded-2xl border border-gray-800 mb-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        label: "Batch Name",
                        placeholder: "e.g. Batch 2024-01",
                        value: newBatch.batch_name,
                        onChange: (e)=>setNewBatch({
                                ...newBatch,
                                batch_name: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/batches/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] text-gray-500 font-bold uppercase mb-1 block",
                                children: "Animal Type"
                            }, void 0, false, {
                                fileName: "[project]/app/batches/page.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full p-4 rounded-xl bg-gray-900 border border-gray-800",
                                value: newBatch.animal_type,
                                onChange: (e)=>setNewBatch({
                                        ...newBatch,
                                        animal_type: e.target.value
                                    }),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Poultry",
                                        children: "Poultry"
                                    }, void 0, false, {
                                        fileName: "[project]/app/batches/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Goats",
                                        children: "Goats"
                                    }, void 0, false, {
                                        fileName: "[project]/app/batches/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Pigs",
                                        children: "Pigs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/batches/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Cattle",
                                        children: "Cattle"
                                    }, void 0, false, {
                                        fileName: "[project]/app/batches/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/batches/page.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/batches/page.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "number",
                        label: "Initial Count",
                        placeholder: "100",
                        value: newBatch.initial_count,
                        onChange: (e)=>setNewBatch({
                                ...newBatch,
                                initial_count: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/batches/page.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleAddBatch,
                        className: "w-full",
                        children: "Save Batch"
                    }, void 0, false, {
                        fileName: "[project]/app/batches/page.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/batches/page.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: batches.length > 0 ? batches.map((batch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900/20 p-4 rounded-2xl border border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold",
                                                children: batch.batch_name || batch.animal_type
                                            }, void 0, false, {
                                                fileName: "[project]/app/batches/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-xs",
                                                children: [
                                                    batch.animal_type,
                                                    " • Joined ",
                                                    new Date(batch.acquired_date).toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/batches/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/batches/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDeleteId(batch.id),
                                        className: "text-red-500 text-xs font-bold",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/app/batches/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/batches/page.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500 text-xs",
                                                children: "Current Count"
                                            }, void 0, false, {
                                                fileName: "[project]/app/batches/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleUpdateCount(batch.id, batch.current_count - 1),
                                                        className: "w-8 h-8 bg-gray-800 rounded font-bold",
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/batches/page.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-bold flex-1 text-center",
                                                        children: batch.current_count
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/batches/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleUpdateCount(batch.id, batch.current_count + 1),
                                                        className: "w-8 h-8 bg-gray-800 rounded font-bold",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/batches/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/batches/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/batches/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500 text-xs",
                                                children: "Initial"
                                            }, void 0, false, {
                                                fileName: "[project]/app/batches/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-bold",
                                                children: batch.initial_count
                                            }, void 0, false, {
                                                fileName: "[project]/app/batches/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/batches/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/batches/page.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        ]
                    }, batch.id, true, {
                        fileName: "[project]/app/batches/page.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12 text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl mb-3",
                            children: "🐣"
                        }, void 0, false, {
                            fileName: "[project]/app/batches/page.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "No batches yet"
                        }, void 0, false, {
                            fileName: "[project]/app/batches/page.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/batches/page.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/batches/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmModal"], {
                isOpen: !!deleteId,
                onClose: ()=>setDeleteId(null),
                onConfirm: handleDelete,
                title: "Delete Batch",
                message: "Are you sure you want to delete this batch? This action cannot be undone.",
                confirmLabel: "Delete",
                loading: deleting
            }, void 0, false, {
                fileName: "[project]/app/batches/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/batches/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(BatchesPage, "aniP+rgKoah69wAmyqTyGiir6IQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFarmData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFarmData"]
    ];
});
_c = BatchesPage;
var _c;
__turbopack_context__.k.register(_c, "BatchesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0q13i2h._.js.map